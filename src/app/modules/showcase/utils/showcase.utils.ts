import {SnuUsers} from '../../../api/snu-users';
import {UserRequest} from '../../../services/body-request/user-request';

export function buildUser(user: UserRequest): SnuUsers {
  return {
    userId: 14,
    firstName: user.firstName,
    lastName: user.lastName,
    accountId: user.accountId
  };
}

export function loadProfileImages(): string[] {
  return [
    'https://www.bootdey.com/img/Content/avatar/avatar2.png',
    'https://www.bootdey.com/img/Content/avatar/avatar3.png',
    'https://www.bootdey.com/img/Content/avatar/avatar4.png',
    'https://www.bootdey.com/img/Content/avatar/avatar5.png',
    'https://www.bootdey.com/img/Content/avatar/avatar6.png',
    'https://www.bootdey.com/img/Content/avatar/avatar7.png',
    'https://www.bootdey.com/img/Content/avatar/avatar1.png'
  ];
}
