using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.SharePoint;

namespace FIMCalendar
{
    public partial class FIMCalendar : UserControl
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            SPSecurity.RunWithElevatedPrivileges(delegate() {
                using (SPSite site = new SPSite(SPContext.Current.Site.Url)) {
                    using (SPWeb web = site.OpenWeb()) {

                        string layoutRoot = "/_layouts/FIMCalendar";

                        string[] cssFiles = new string[] {
                            layoutRoot + "/CSS/jquery-ui.css",
									 layoutRoot + "/CSS/jquery-ui-timepicker-addon.css"
                        };

                        string[] jsFiles = new string[] {
                            layoutRoot + "/JS/jquery.js",
                            layoutRoot + "/JS/jquery-ui.js",
                            layoutRoot + "/JS/jquery-ui-i18n.js",
									 layoutRoot + "/JS/jquery-ui-timepicker-addon.js",
                            layoutRoot + "/JS/fim-calendar.js"
                        };


                        for (int i = 0; i < cssFiles.Length; i++)
                        {
                            LiteralControl cssControl = new LiteralControl();
                            cssControl.ID = "fimCalendarCSS" + i;
                            cssControl.Text = string.Format("<link href=\"{0}\" rel=\"stylesheet\" type=\"text/css\" />", cssFiles[i]);

                            if (FindControl(cssControl.ID) == null)
                                Controls.Add(cssControl);
                        }

                        for (int i = 0; i < jsFiles.Length; i++)
                        {
                            if (!Page.ClientScript.IsClientScriptIncludeRegistered("fimCalendarJS" + i))
                                Page.ClientScript.RegisterClientScriptInclude("fimCalendarJS" + i, jsFiles[i]);
                        }
                    }
                }
            });
        }

    }
}