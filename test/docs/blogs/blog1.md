---
title: Setup router based static IP1 in windows server
category: Infrastructure
---

## How to setup router based static IP1 in windows server 

Over a weekend I was trying out to setup a windows server 2008 with TP-Link wireless router. The purpose was I should be able to connect to the server through static IP from anywhere, at the same time I wanted a wireless network in the office. It took me few hours and I thought that it could be a nice blog article, although this is not my core field. Instead of TP-Link router you can use any other router.

<P class = 'emphasis'>Steps to setup static IP in a server and share its internet connection on a wireless router of TP-Link</P>

### Server setup

1. Provide two lan cards in server as Lan 1, Lan2.
2. In LAN 1 card plug in the static IP cable provided by your ISP.
3. In Lan 1 card properties set the static IP configurations as provided by your service provider.
4. In Lan 1 properties share internet connection.
5. Now check and confirm that in your server you can browse internet.
6. In Lan 2 properties set the IP’s as follows:

    a. 192.168.137.1. In fact this is already done once you do sharing in Lan1. you need not do anything.

    b. Subnet mask: 255.255.255.0. This is also done automatically.

    c. Rest everything is blank

Please note that you have no choice. When you share internet connection in Windows then automatically an IP 192.168.137.1 is provided as static IP to another LAN card. This ends up server-side setup.

### TP-Link router setup

1. Default LAN address IP of TP-Link router is 192.168.0.1. This we will not change. Let it be the same.
2. TP-Link router has one WAN port and four LAN port. The WAN port is of a different color. Please note that we will not use the WAN port in        this setup. In this setup only the Lan port will be used.
3. Connect a different computer to TP-LINK LAN port through a network cable. This is important.
4. In the computer lan card properties set “Obtain an IP address automatically” and “obtain DNS server address automatically”
5. Browse at 192.168.0.1 and login as admin / admin
6. In Network –> WAN select Dynamic IP
7. In Network –> LAN leave it at 192.168.0.1
8. In Wireless –> Wireless settings give “Wireless Network Name” as name of your company which will appear as WIFI in other computers.
9. Set wireless security passwords which is simple.
10. Save your settings.

11. Now disconnect the TP-LINK router from the computer. Its setup is done.

This completes router setup.

### Client computers setup
In all the client computers IP’s need to be setup specifically. Computers in the LAN connected on WIFI or connected through wire with the router will not take IP’s automatically.
Following is the IP setup in all computers:
IP: 192.168.137.X
Subnet: 255.255.255.0
Default gateway: 192.168.137.1

DNS server Address: 192.168.137.1

### Wired connections
1. Server LAN 2 card to one out of four LAN ports of TP-LINK wireless router
2. ISP cable to LAN 1 of server computer.
3. WAN port of TP-LINK will be unused.

### Setup of TP-Link WIFI router without internet sharing
1. Connect a computer to LAN port of TP-LINK. In computer set lan setting as “Obtain IP address dynamically”.
2. Browse at 192.168.0.1 and login as admin / admin.
3. Set Network –> WAN as static IP and provide IP settings provided by your ISP.
4. Set wireless for company name and password.
5. Save.
6. Now unplug the wire from the computer and Connect ISP cable directly to WAN port of TP-LINK router.
7. In all other computers you can set “Obtain IP address dynamically”.
8. You will be able to use internet in all computers.

9. The above setup has nothing to do with internet sharing through server and using static IP in server. This is an independent setup of wireless router providing internet to all computers in its range.

### Setup for DHCP server in TP-link when no specific IP’s need to be provided to each client computer
In the static IP setup in Windows server sharing Internet connection using a second LAN card you needed to give a specific IP to each client computer in the format 192.168.137.X. You can avoid that by using DHCP server of TP-LINK and each client computer can obtain its own IP.

Following is the procedure:
You need to activate DHCP server in router. Purpose of DHCP server is to provide automatic IP addresses to each computer in network.

1. Connect the TP-link LAN port (not WAN port) to a fresh computer through a LAN cable with computer having set a) Obtain an IP address automatically, Obtain a DNS server address automatically.

2. Login to the TP-link at its default IP which is factory default as 192.168.0.1 unless you have changed it.

3. Go to Network ->LAN. You need to change the TP-LINK default IP address which is 192.168.0.1. This is because in your server you have done internet sharing which defaults to server second LAN IP as 192.168.137.1. So to be in same network you need to change the default LAN IP address of your router to 192.168.137.2. So in the LAN setup of TP-Link set the IP address to 192.168.137.2. and save. From now on while connecting to TP-LINK you need to use this IP. You have changed the default.

4. Go to DHCP  DHCP settings.

5. Enable DHCP server.

6. Start IP address as 192.168.137.3.

7. End IP address: 192.168.137.20. I do not have more than 15 computers in the network.

8. Default gateway: 192.168.137.1

9. Primary DNS: 192.168.137.1

10. In Network WAN I did (Not sure if required or not)

11. Checked use these DNS servers. Primary DNS: 192.168.137.1




<style>

.emphasis, h3 {
    color: blue;
}

</style>