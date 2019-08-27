var Git4CSourceDialog = {

    getComponent: function () {

        return {

            template:
            '<!-- Render the dialog -->'+
            '<section ref="dialog" role="dialog" id="git4c-raw-sourcecode-dialog" class="aui-layer aui-dialog2 aui-dialog2-xlarge"'+
            '         aria-hidden="true">'+
            '    <!-- Dialog header -->'+
            '    <header class="aui-dialog2-header">'+
            '       <!-- The dialog\'s title -->'+
            '        <h2 class="aui-dialog2-header-main">File source</h2>'+
            '        <!-- Actions to render on the right of the header -->'+
            '        <div style=" text-align: right; margin-top: 10px;">'+
            '           <a ref="raw_save_file_button"'+
            '              v-bind:href="\'data:application/xml;charset=utf-8,\' + rawContent" v-bind:download="locationPath"'+
            '               style="margin-right: 5px" class="aui-button">'+
            '                <span class="aui-icon aui-icon-small aui-iconfont-export" style="margin-right: 1px">'+
            '                    Save the full source of this file'+
            '                </span>'+
            '           </a>'+
            '           <button class="aui-button" v-on:click="copyToClipboard()"'+
            '                    style="margin-right: 5px">'+
            '               <span class="aui-icon aui-icon-small aui-iconfont-copy-clipboard" style="margin-right: 1px">'+
            '                    Copy the source of this file to clipboard'+
            '               </span>'+
            '           </button>'+
            '           <button class="aui-button" v-on:click="closeDialog()"'+
            '                    style="margin-right: 5px">'+
            '               <span class="aui-icon aui-icon-small aui-iconfont-close-dialog" style="margin-right: 1px">'+
            '                    Close'+
            '               </span>'+
            '           </button>'+
            '        </div>'+
            '    </header>'+
            '    <!-- Main dialog content -->'+
            '    <div class="aui-dialog2-content" ref="dialog_content">'+
            '    </div>'+
            '    <!-- Dialog footer -->'+
            '    <footer class="aui-dialog2-footer">'+
            '        <div class="aui-dialog2-footer-actions">'+
            '            <button v-on:click="closeDialog" id="git4c-raw-sourcecode-dialog-close-button" class="aui-button aui-button-link">Close</button>'+
            '        </div>'+
            '    </footer>'+
            '</section>',
            data: function () {
                return {
                    rawContent: "",
                    locationPath: ""
                };
            },
            methods: {
                show: function (fileContent, strPath) {
                    this.rawContent = fileContent
                    this.locationPath = strPath
                    const normalizedString = fileContent.replace(/\s+/g, '')

                    //https://stackoverflow.com/a/6234804/2511670
                    const escapeHtml = function(unsafe) {
                        return unsafe
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#039;");
                    }

                    var dialogContent

                    if (!normalizedString) {
                        dialogContent =
                            '<div class="aui-message aui-message-generic">'+
                            '<p class="title">'+
                            '<strong>This file is empty</strong>'+
                            '</p>'+
                            '</div>'
                    } else {
                        const content = fileContent
                        dialogContent =
                            '<pre>'+
                            '    <code id="git4c-dialog-code" class="git4c-code markdown">' + escapeHtml(content) + '</code>'+
                            '</pre>'
                    }

                    const dialogContentDom = $(this.$refs["dialog_content"])

                    dialogContentDom.html(dialogContent)

                    dialogContentDom.find('#git4c-dialog-code').each(function (i, block) {
                        hljs.highlightBlock(block);
                    });

                    const dialogDom = this.$refs.dialog

                    AJS.dialog2(dialogDom).show()

                },
                copyToClipboard: function copyToClipboard() {
                    console.log(">> modal copyToClipboard()");
                    if (window.clipboardData && window.clipboardData.setData) {
                        // IE specific code path to prevent textarea being shown while dialog is visible.
                        return window.clipboardData.setData("Text", this.rawContent);

                    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                        var textarea = document.createElement("textarea");
                        textarea.textContent = this.rawContent;
                        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                        document.body.appendChild(textarea);
                        textarea.select();
                        try {
                            console.log("textarea.textContent " + textarea.textContent );
                            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
                        } catch (ex) {
                            console.warn("Copy to clipboard failed.", ex);
                            return false;
                        } finally {
                            document.body.removeChild(textarea);
                        }
                    }
                },
                closeDialog: function () {
                    const dialogDom = this.$refs.dialog
                    AJS.dialog2(dialogDom).hide()
                }

            }

        }

    }

}