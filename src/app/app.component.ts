import {Component} from '@angular/core';

/**
 * This component is the main (root) component.
 * Can contain a nested tree of components.
 */

// Member class
export class Member {
    id: number;
    name: string;
}


@Component({
    selector: 'my-app',
    template: `
                <h1>{{title}}</h1>
                <h2>{{member.name}} details!</h2>
                <div><label>id: </label>{{member.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="member.name" placeholder="name">
                </div>
`
})

export class AppComponent {
    title = 'All members';
    member: Member = {
        id: 1,
        name: 'Bram'
    };
}
