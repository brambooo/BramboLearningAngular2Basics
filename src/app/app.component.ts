import {Component} from '@angular/core';

/**
 * This component is the main (root) component.
 * Can contain a nested tree of components.
 */

// Member class
export class Member {
    // Attributes
    id: number;
    name: string;
}

// List of member objects
const MEMBERS: Member[] = [
    {id: 2, name: 'Henk'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'Koen'},
    {id: 5, name: 'Willem'},
    {id: 6, name: 'Jeffrey'},
];


@Component({
    selector: 'my-app',
    template: `

                <h1>{{title}}</h1>
                
                <h2>Leden</h2>
                
                <!-- MEMBERS LIST-->
                <ul class="members">
                    <li *ngFor="let member of members" (click)="onSelect(member)" [class.selected]="member === selectedMember">
                        <span class="badge">{{member.id}}</span> {{member.name}}
                    </li>
                </ul>
                
                <div *ngIf="selectedMember">
                    <!-- SELECTED MEMBER DETAILS -->
                    <h2>{{selectedMember.name}} informatie!</h2>
                    <div><label>id: </label>{{selectedMember.id}}</div>
                    <div>
                      <label>name: </label>
                      <input [(ngModel)]="selectedMember.name" placeholder="name">
                    </div>
                </div>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .members {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .members li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .members li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .members li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .members .text {
        position: relative;
        top: -3px;
      }
      .members .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `]
})

export class AppComponent {
    title = 'All members';
    selectedMember: Member;
    members = MEMBERS;

    onSelect(member: Member): void {
        this.selectedMember = member;
    }
}
