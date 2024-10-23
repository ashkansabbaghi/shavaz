export interface Address {
    id?: number;
    province: string;
    city: string;
    postalCode: string;
    buildingNumber: string;
    unitNumber?: string;
    address?: string;
    receiver?: string;
}

export interface NameSteps {
    phoneNumber: string;
    orderNotPlaced: string;
    otpCode: string;
    selectAddress: string;
    newAddress: string;
    accepted: string;
    finished: string;
    addNewAddress: string;
};