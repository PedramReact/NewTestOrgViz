project_name: "orange-dashboard-looker"

constant: VIS_LABEL {
  value: "orange_viz_label_git_test"
  export: override_optional
}

constant: VIS_ID {
  value: "orange_viz_id_git_test"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: "https://github.com/PedramReact/NewTestOrgViz/blob/main/graph.js"
  label: "@{VIS_LABEL}"
  dependencies: [ "https://code.jquery.com/jquery-2.2.4.min.js","https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js", "https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js",]

}
