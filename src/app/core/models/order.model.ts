export class OrderModel {
    constructor(public firstName = '',
                public lastName = '',
                public email = '',
                public phoneNumber = '',
                public pickup = false,
                public address = '') { }
}
