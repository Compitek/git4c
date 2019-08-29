# Just how to build it?
1. get maven onto your system. 
  1.1 Check if it already installed with "mvn --version" command. I test to build with 3.6.0 version. 
  1.2 Otherwise <a href="https://maven.apache.org/download.cgi" target="_blank">download it</a>, set <a     href="https://maven.apache.org/install.html">environment variables</a> and maybe restart your pc) 
2. get <a href="https://github.com/Compitek/git4c/archive/master.zip" target="_blank">zip archive</a> from this repository and extract it
3. go to confluence-plugin folder from extract destinanion
4. open command-line tool and start command:
  mvn clean package
5. go to target folder and look for "confluence-plugin.obr" . This is a compiled plugin.

# Git4C - Git Viewer For Confluence

See plugin details at: <a href="http://opensource.networkedassets.com/opensource-lab/confluence/newgit4c/index.html">Git Viewer for Confluence Description</a>  
User Guide: <a href="http://opensource.networkedassets.com/opensource-lab/confluence/newgit4c/documentation/User/">Git Viewer for Confluence User Guide</a>  
Administration Guide: <a href="http://opensource.networkedassets.com/opensource-lab/confluence/newgit4c/documentation/Administration/">Git Viewer for Confluence Administration Guide</a>  
  
Plugin available to download:  
  - <a href="https://marketplace.atlassian.com/plugins/com.networkedassets.git4c.confluence-plugin/server/overview">On Atlassian Marketplace</a>

## Installation

1. Login to confluence as an administrator, click the cog icon in upper-right corner and select Add-ons.
1. Upload the .jar file as a new Plugin in the Plugin-Administration or search for "Git Viewer for Confluence" plugin.
2. Check if the plugin has been installed correctly and if all modules are enabled.
  
## Development
Before first build you must invoke `mvn validate` to install PlantUML jar in your local maven repository.

# <a href="http://www.networkedassets.com/"><img src="https://www.networkedassets.net/images/NA_logo.png" height="79"></a>

See documentations in Markdown:
 - [Development Guide](guides/Development/index.md)  
 - [Tester Guide](guides/Tester/index.md)  
 - [User Guide](guides/User/index.md)  
 - [Administration Guide](guides/Administration/index.md)  
 - [Installation Guide](guides/Installation/index.md)  
 - [Architecture Documentation](documentation/Architecture%20Documentation.md)  
  
  
See demo at: [Confluence Demo](http://git4c-demo.networkedassets.net)
