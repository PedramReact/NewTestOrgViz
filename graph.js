const visObject = {
 
  options: {
    first_option: {
      type: "string",
      label: "My First Option",
      default: "Default Value",
    },
    second_option: {
      type: "number",
      label: "My Second Option",
      default: 42,
    },
  },

  create: function (element, config) {
    element.innerHTML = "<h1>Ready to render!</h1>";
  },

  updateAsync: function (
    data,
    element,
    config,
    queryResponse,
    details,
    doneRendering
  ) {
    var keys = Object.keys(data[0]);

    var firstKey = keys[0];
    var secondKey = keys[1];
    var groupKey = keys[2];

    function getNodes(data) {
      var groupsMap = [];
      var nodes = [];

      data.forEach((item) => {
        var groupNodeKey = item[groupKey];
        var firstNodeKey = item[firstKey];
        var secondNodeKey = item[secondKey];

        let index = groupsMap?.findIndex((elt) => elt === groupNodeKey);

        if (index < 0) {
          groupsMap.push(groupNodeKey);
        }

        if (!nodes.some((node) => node.id === firstNodeKey)) {
          nodes.push({ id: firstNodeKey, label: firstNodeKey, group: index });
        }

        if (
          !nodes.some((node) => node.id === secondNodeKey) &&
          !data.some((d) => d[firstKey] === secondNodeKey)
        ) {
          nodes.push({ id: secondNodeKey, label: secondNodeKey, group: index });
        }
      });
      return nodes;
    }
    var nodes = getNodes(data);

    var edges = data.map((item) => ({
      from: item?.[firstKey],
      to: item?.[secondKey],
    }));

    const content = { nodes, edges };

    var options = {
      layout: {
        hierarchical: {
          direction: "LR",
          sortMethod: "directed",
        },
      },
      nodes: {
        fixed: true,
        shape: "box",
        size: 40,
        borderWidth: 1,
        color: {
          background: "lightblue",
          border: "blue",
          hover: "red",
          highlight: {
            background: "lightcyan",
            border: "cyan",
          },
        },
        font: {
          size: 16,
          color: "black",
        },
      },
      edges: {
        arrows: "to",
        width: 2,
        color: {
          color: "black",
          hover: "red",
          highlight: "#F7E7CE",
        },
      },
      interaction: {
        hover: true,
      },
      physics: {
        enabled: false,
      },
    };

    var network = new vis.Network(element, content, options);
    doneRendering();
  },
};

looker.plugins.visualizations.add(visObject);
