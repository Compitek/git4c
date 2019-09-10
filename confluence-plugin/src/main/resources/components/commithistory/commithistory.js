var Git4CCommitHistory = {
        getComponent: function(Events) {

            return {
                template:
'                <div>'+
'                    <a v-on:click="openDialog" href="javascript:void(0)" style="white-space: nowrap;">View Commits</a>'+
'                    <section role="dialog" id="git4c_commit_history_dialog" ref="commit_history_dialog" class="aui-layer aui-dialog2 aui-dialog2 aui-dialog2-medium" aria-hidden="true">'+
'                    <header class="aui-dialog2-header">'+
'                        <h2 class="aui-dialog2-header-main">Commit history</h2>'+
'                        <a class="aui-dialog2-header-close">'+
'                            <span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span>'+
'                        </a>'+
'                    </header>'+
'                    <div class="aui-dialog2-content" style="display: flex; flex-direction: column;">'+
'                    <div>' +
'                    <button style="display: none"></button>'+
'                        <div>' +
'                           <div class="git4c-commithistory-branch-holder" >' +
'                               <div style="display: flex; justify-content: space-between;">' +
'                                   <div>Current branch: <b>{{branch}}</b></div>' +
'                                   <div v-if="serverType==1 || serverType==2">' +
'                                       <a :href="comparedCommitsLink" target="_blank"  v-if="comparedCommitsLink.length>0">compare two commits</a>' +
'                                       <div v-else>compare two commits</div>' +
'                                   </div>' +
'                               </div>' +
'                           </div>'+
'                        </div>'+
'                        <div><hr style="border: 1px solid #CCCCCC"/></div>'+
'                        <div v-show="listAvailable" v-for="commit in commitList" ref="commit_table">'+
'                            <div style="display: flex; flex-direction: row; margin-bottom: 15px">'+
'                                <div style="display: flex; flex-direction: column; flex-grow: 2;">'+
'                                    <div style="word-break: break-all" v-html="commit.message"></div>'+
'                                    <div style="display: flex; flex-direction: row; margin-top: 10px; font-weight: bold;">'+
'                                        <div style="margin-right: 3px"> {{commit.date}} by </div>'+
'                                        <div> {{commit.authorName}} </div>'+
'                                    </div>'+
'                                </div>'+
'                                <div v-bind:title="commit.id" style="width:95px; align-self: center; height: 30px""> '+
'                                   <div class="checkbox" v-if="serverType==1 || serverType==2">'+
'                                         <input class="checkbox" type="checkbox" ' +
'                                            :value="commit.id.substring(0,8)" v-model="checkedCommits">'+
'                                       <label>{{commit.id.substring(0,8)}}</label>'+
'                                   </div>'+
'                                   <div v-else>'+
'                                        {{commit.id.substring(0,8)}}'+
'                                   </div>'+
'                                </div>'+
'                            </div>'+
'                            <hr style="border: 1px solid #CCCCCC"/>'+
'                        </div>'+
'                        <div v-show="!listAvailable">'+
'                            <span>Loading...</span>' +
'                            <span ref="spinner_div" class="button-spinner git4c-commithistory-spinner-holder"></span>'+
'                        </div>'+
'                    </div>'+
'                    </div>'+
'                    <footer class="aui-dialog2-footer">'+
'                        <div class="aui-dialog2-footer-actions">'+
'                            <button v-on:click="closeDialog" class="aui-button aui-button-link">Close</button>'+
'                        </div>'+
'                    </footer>'+
'                    </section>'+
'                </div>',
                data: function () {
                    return {
                        commitList: [],
                        promise: undefined,
                        checkedCommits: []
                    }
                },
                mounted: function () {
                    AJS.$(this.$refs["spinner_div"]).spin()
                },
                computed: {
                    listAvailable: function(){
                        return this.commitList && this.commitList.length
                    },
                    comparedCommitsLink: function(){
                        if(this.checkedCommits.length==2) {
                            return this.repoLink + '/compare/' + this.checkedCommits[0] + '...' + this.checkedCommits[1]
                        }
                        else {
                            return ''
                        }
                    }
                },
                props: ["macroUuid", "file", "branch", "serverType", "repoLink"],
                watch: {
                    "macroUuid": function () {
                        this.commitList = []
                    },
                    "file": function () {
                        this.commitList = []
                    },
                    "branch": function () {
                        this.commitList = []
                    }
                },
                methods: {
                    openDialog: function(){
                        this.checkedCommits=[]
                        this.getCommitList()
                        AJS.dialog2(this.$refs.commit_history_dialog).show()
                    },
                    closeDialog: function(){
                        AJS.dialog2(this.$refs.commit_history_dialog).hide()
                    },
                    getCommitList: function(){
                        const vm = this

                        if (this.commitList.length) {
                            return
                        }

                        if (vm.promise) {
                            vm.promise.cancel()
                        }

                        const promise = Git4CApi.getListOfCommitsForMacro(this.macroUuid, this.branch, this.file)

                        promise
                            .then(function (commits) {

                                commits.forEach(function(commit) {
                                    commit.date = (new Date(commit.date)).toLocaleString()
                                    commit.message = commit.message.replace(/(?:\r\n|\r|\n)/g, '<br />');
                                })

                                vm.commitList = commits

                                vm.$nextTick( function (){
                                    vm.setTooltips()
                                })
                            })

                    },
                    setTooltips: function() {
                        AJS.$(".commit-id-tooltip").tooltip();
                    },
                    update: function(branch, file){
                        this.branch = branch
                        this.file = file
                        this.getCommitList()
                    }
                }
            }

        }
    };