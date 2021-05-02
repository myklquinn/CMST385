<?xml version="1.0" encoding="utf-8"?>
<!--  
    Note: As an alternative to hand editing this file you can use the  
    web admin tool to configure settings for your application. Use
    the Website->Asp.Net Configuration option in Visual Studio.
    A full list of settings and comments can be found in 
    machine.config.comments usually located in 
    \Windows\Microsoft.Net\Framework\v2.x\Config
-->
<configuration>
    <system.webServer>
        <staticContent>
            <mimeMap fileExtension=".mp4" mimeType="video/mp4" />
            <mimeMap fileExtension=".webm" mimeType="video/webm" />
        </staticContent>
    </system.webServer>
</configuration>
