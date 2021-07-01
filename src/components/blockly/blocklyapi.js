/*
(function () {
  function saveWorkspace() {
    document.blocklyCanvas.blocklyXml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  }

  function loadWorkspace() {
    const workspace = Blockly.getMainWorkspace();
    workspace.clear();
    if (document.blocklyCanvas.blocklyXml) {
      Blockly.Xml.domToWorkspace(document.blocklyCanvas.blocklyXml, workspace);
    }
  }
}());
*/
