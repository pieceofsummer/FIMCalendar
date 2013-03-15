# FIMCalendar

One of the most annoying "features" of MS FIM portal is that you can't just pick a date from calendar, but you need to type it into date field (according to regional settings). 
This might be ok for nerds from IT department. But hey, you're going to make all other people use it, do you really think they want to type dates?

So the project goal is to add familiar jQuery datepicker to the FIM portal. Do you like it?

![demo](demo.png)

## Requirements

* WSS 3.0, SharePoint 2007, or SharePoint 2010
* Forefront Identity Management 2010 (or 2010 R2) Portal

## jQuery version

The project is built with jQuery 1.9.1 and custom jQuery UI 1.10 (with core and datepicker modules only). Client-side code is located under `12/TEMPLATE/LAYOUT/FIMCalendar`.

## Regional settings

Calendar doesn't have any special settings. It takes locale information from FIM portal, and localizes jQuery datepicker with corresponding locale information.

## Build instructions

There's already a pre-built version as a [WSP file](FIMCalendar.wsp).

If you want, you may build it from sources. You'll need Microsoft.SharePoint.dll (not included, you may copy it from your SP server), Visual Studio (2010 or later) and [WSPBuilder](http://wspbuilder.codeplex.com).

Build a solution in Visual Studio, after that launch WSPBuilder.exe in the solution directory. For example, if you forked a repositary to `C:\Projects\FIMCalendar`, you'll do the following:
<pre>
c:\>cd C:\Projects\FIMCalendar
c:\Projects\FIMCalendar>"c:\Program Files (x86)\WSPTools\WSPBuilderExtensions\WSPBuilder.exe"
</pre>

It will create or update a FIMCalendar.wsp in the solution folder. After that you're ready for installation

## Installation

You'll need to use either old-school `stsadm`, or new PowerShell extensions. Let's assume you're running on WSS and have only `stsadm`.

First, you need to add a solution:
<pre>
stsadm -o addsolution -filename c:\Projects\FIMCalendar\FIMCalendar.wsp
</pre>

This will add solution named `FIMCalendar.wsp` to your SharePoint. After that you need to deploy it on IdentityManagement site (assuming `fim` is your server name):
<pre>
stsadm -o deploysolution -name FIMCalendar.wsp -url http://fim/IdentityManangement/ -immediate -allowgacdeployment
</pre>

After that you need to activate feature `FIMCalendar` for FIM Portal:
<pre>
stsadm -o activatefeature -name FIMCalendar -url http://fim/IdentityManangement/
</pre>

The feature has a single site scope, so it won't affect any other sites running on your SharePoint.

To update already deployed solution, you may use the following:
<pre>
stsadm -o upgradesolution -name FIMCalendar.wsp -filename c:\Projects\FIMCalendar\FIMCalendar.wsp -immediate -allowgacdeployment
</pre>
