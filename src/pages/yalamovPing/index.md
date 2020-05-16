---
path: "/personal-site2.0/yalamovPing"
date: "2020-05-01"
title: "YalamovPing"
excerpt: "Scalable and performant ping CLI for Linux and MacOS in C++"
image: "yalamovping.png"
tag: ['project']
---

# YalamovPing

<img class="align-self-center mr-3" src="/img/yalamovping.png" width="120" height="120" alt="HADP Logo">

#### Made with C++, args, and Atom

YalamovPing is a small ```ping``` command line interface for MacOS and Linux. I wanted to have a go at coding something a bit more low level than I'm used to in a more low level language than I'm used to. Recreating and improving upon an existing Bash shell command seemed like a good fit for my desires.

This project was done to improve upon the ```ping``` command with flexibility, customization, and performance in mind. As such, C++ seemed pretty appropriate. The whole project is literally *just* C++, with a framework called [args](https://github.com/taywee/args) to make adding new features and argument options modular and straightforward. On top of the standard metrics that ```ping``` provides like RTT, ICMP Sequence, and TTL, I have also implemented custom options for TTL, IPv6 support, the ability to specify seconds (down to the millisecond) between sending packets, and the ability to specify how many total packets to send.

<a href="https://github.com/AmirYalamov/YalamovPing"><i class="fab fa-github fa-2x"></a>
