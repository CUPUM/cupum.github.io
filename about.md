---
layout: default
title: About Us
---

# Producing and transmitting knowledge on cities’ ecological, social and digital transitions 
The UNESCO Chair in Urban Landscape of the University of Montreal contributes to research and education on cities, supporting and raising awareness among elected officials and municipal experts, governments, and citizens for the future of their landscapes and quality of life within urban settings. Through the implementation of its objectives, the Chair builds bridges between the academic world, civil society, local communities, research, and political decisions. Thereby, it participates to a sustainable development of cities and urban territories around the world.

The Chair develops research, educational, and valorisation projects in collaboration with UNESCO and the University of Montréal, and partners engaged in sustainable development, responsible artificial intelligence, inclusive policy-making and international cooperation.   
The Chair’s team gathers career and student researchers and educators with expertise spanning across design, the human and social science, natural sciences, engineering and education. Most team-members are located in Montréal, and bind with multiple professional, scientific, academic and technical networks spanning across the globe.

Our offices are located on unceded indigenous territory within the Environmental Design Building of the University of Montréal's Mountain campus.

## Our Team

<ul>
{% assign team_members = site.team | sort: 'name' %}
{% for member in team_members %}
  <li>
    <img src="{{ member.portrait }}" alt="{{ member.name }}" class=team-photo">
    <h2><a href="{{ member.url }}">{{ member.name }} ({{member.pronouns}})</a></h2>
    <p>{{ member.position }}</p>
    <p>{{ member.bio }}</p>
  </li>
{% endfor %}
</ul>




































