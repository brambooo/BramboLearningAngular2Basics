import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {Member} from "./member";
import {MemberService} from './member.service';

/**
 * This component is the main (root) component.
 * Can contain a nested tree of components.
 */

@Component({
    selector: 'my-app',
    template: `

                <h1>{{title}}</h1>
                
                <!-- MEMBERS LIST-->
                <ul class="members">
                    <li *ngFor="let member of members" (click)="onSelect(member)" [class.selected]="member === selectedMember">
                        <span class="badge">{{member.id}}</span> {{member.name}}
                    </li>
                </ul>
                
                <member-detail [member]="selectedMember"></member-detail>
                
           
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
    `],
    // Providers tell Angular to create instances for the given services in the given providers array.
    // This component and child components in this three can use these service(s).
    providers: [MemberService]
})

export class AppComponent implements OnInit {

    /**
     * ngOnInit
     * lifecycle hook is used to initialize the members
     */
    ngOnInit(): void {
        this.getMembers();
    }

    title = 'Alle leden';
    selectedMember: Member;
    members: Member[];

    // Constructor does nothing, the private memberService property will be automatically inject with a MemberService. Important to create a provider that know which service to inject (see providers property in @Component).
    constructor(private memberService: MemberService) {}

    getMembers(): void {
        this.members = this.memberService.getMembers();
    }

    onSelect(member: Member): void {
        this.selectedMember = member;
    }
}
