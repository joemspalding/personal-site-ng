import { Injectable } from '@angular/core';

import { Contact } from '../../models/Contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor() { }

  getContacts(): Contact[] {
    return [
      {
        name: "linkedin",
        blurb: "My LinkedIn account is where you can connect with me and discuss employment opportunites. I'm currently at Waystar, but I am always open to opportunities!",
        url: "https://www.linkedin.com/in/joseph-miles-spalding"
      },
      {
        name: "github",
        blurb: "I run a modest shop over at github, though a useful tool for groups of developers to contribute to amazing and passionate projects, I mostly use it for $&#!-posting dumb ideas! Go ahead and follow me if you're into that!",
        url: "https://github.com/joemspalding"
      },
      {
        name: "soundcloud",
        blurb: "I mostly post crappy electronic music here, but you know what, it's MY crappy electronic music that I made! Go check it out.",
        url: "https://soundcloud.com/joe-spalding-949266409"
      }
    ];
  }

}
