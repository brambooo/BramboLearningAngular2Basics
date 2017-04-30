/**
 * Created by bram_ on 30-4-2017.
 * MemberService
 * is responsible for sharing the member data along components that need it.
 */

import {Injectable} from '@angular/core';
import {MEMBERS} from './mock-members';
import {Member} from "./member";

@Injectable()
export class MemberService {
    getMembers(): Member[] {
        return MEMBERS;
    }
}
