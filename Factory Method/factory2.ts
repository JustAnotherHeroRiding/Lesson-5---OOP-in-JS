interface IUser {
    getPermissions(): string[];
}

class Admin implements IUser {
    getPermissions(): string[] {
        return ['read', 'write', 'delete'];
    }
}

class Guest implements IUser {
    getPermissions(): string[] {
        return ['read'];
    }
}

class Member implements IUser {
    getPermissions(): string[] {
        return ['read', 'write'];
    }
}

class UserFactory {
    createUser(type: string): IUser {
        switch (type) {
            case 'Admin':
                return new Admin();
            case 'Guest':
                return new Guest();
            case 'Member':
                return new Member();
            default:
                throw new Error('Invalid user type');
        }
    }
}

const factory = new UserFactory();
const admin = factory.createUser('Admin');
const guest = factory.createUser('Guest');
const member = factory.createUser('Member');

/* console.log(admin.getPermissions()); // ['read', 'write', 'delete']
console.log(guest.getPermissions()); // ['read']
console.log(member.getPermissions()); // ['read', 'write']
 */

interface IElement {
    render(): void;
}

class Button implements IElement {
    render(): void {
        console.log('<button>Button</button>');
    }
}

class Input implements IElement {
    render(): void {
        console.log('<input type="text" />');
    }
}

class TextArea implements IElement {
    render(): void {
        console.log('<textarea></textarea>');
    }
}


class ElementFactory {
    createElement(type: string): IElement {
        switch (type) {
            case 'Button':
                return new Button();
            case 'Input':
                return new Input();
            case 'TextArea':
                return new TextArea();
            default:
                throw new Error('Invalid element type');
        }
    }
}

const elementFactory = new ElementFactory();
const button = elementFactory.createElement('Button');
const input = elementFactory.createElement('Input');
const textArea = elementFactory.createElement('TextArea');

button.render(); // '<button>Button</button>'
input.render(); // '<input type="text" />'
textArea.render(); // '<textarea></textarea>'