project_name: "orange-dashboard-looker"

constant: VIS_LABEL {
  value: "orange_viz_label"
  export: override_optional
}

constant: VIS_ID {
  value: "orange_viz_id"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: "https://github.com/PedramReact/NewTestOrgViz/blob/main/graph.js"
  label: "@{VIS_LABEL}"
}
