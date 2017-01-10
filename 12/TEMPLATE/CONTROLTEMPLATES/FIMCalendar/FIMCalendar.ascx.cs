using System;
using System.Web.UI;
using Microsoft.SharePoint;

namespace FIMCalendar
{
    public partial class FIMCalendar : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SPSecurity.RunWithElevatedPrivileges(delegate ()
            {
                using (SPSite site = new SPSite(SPContext.Current.Site.Url))
                {
                    using (SPWeb web = site.OpenWeb())
                    {
                        string layoutRoot = "/_layouts/FIMCalendar";

                        string[] cssFiles = new string[] {
                            layoutRoot + "/CSS/jquery-ui-datepicker.css",
                            layoutRoot + "/CSS/jquery-ui-timepicker-addon.css"
                        };

                        string[] jsFiles = new string[] {
                            layoutRoot + "/JS/fim-calendar-loader.js",
                        };

                        for (int i = 0; i < cssFiles.Length; i++)
                        {
                            LiteralControl cssControl = new LiteralControl();
                            cssControl.ID = "fimCalendarCSS" + i;
                            cssControl.Text = string.Format("<link href=\"{0}\" rel=\"stylesheet\" type=\"text/css\" />", cssFiles[i]);

                            if (this.FindControl(cssControl.ID) == null)
                            {
                                this.Controls.Add(cssControl);
                            }
                        }

                        for (int i = 0; i < jsFiles.Length; i++)
                        {
                            if (!this.Page.ClientScript.IsClientScriptIncludeRegistered("fimCalendarJS" + i))
                            {
                                this.Page.ClientScript.RegisterClientScriptInclude("fimCalendarJS" + i, jsFiles[i]);
                            }
                        }
                    }
                }
            });
        }

    }
}