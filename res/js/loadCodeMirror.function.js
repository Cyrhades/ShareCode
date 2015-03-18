/**
 * Loads Code Mirror and attaches it to #code textarea
 * 
 * @return {void}
 */
function loadCodeMirror()
{
  editorInstance = CodeMirror.fromTextArea(
    document.getElementById('code'),
    {
      autofocus: userIsAdmin,
      tabSize: 2,
      indentUnit: 2,
      indentWithTabs: false,
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      mode: "application/x-httpd-php",
      readOnly: !userIsAdmin,
      smartIndent: true,
      theme: "monokai"
    }
  );

  // We install the 'keyup' event handler on the document to unfocus when "escape" key is pressed
  $(document).keyup(function(event)
  {
    if (event.keyCode == 27) editorInstance.getInputField().blur();
  });
}
