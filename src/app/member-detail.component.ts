import {Component, Input} from '@angular/core';
import {Member} from "./member";

/**
 * @Component
 * decorator provides Angular metadata for the component.
 */
@Component({
    selector: 'member-detail',
    template: `
        <div *ngIf="member">
                <!-- SELECTED MEMBER DETAILS -->
                <h2>{{member.name}} informatie!</h2>
                <div><label>id: </label>{{member.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="member.name" placeholder="name">
                </div>
        </div>
    `
})

export class MemberDetailComponent {
    @Input() member: Member;
}