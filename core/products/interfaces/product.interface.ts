import { User } from "@/core/auth/interface/user";

export interface Product {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       Size[];
    gender:      Gender;
    tags:        string[];
    user:        User;
    images:      string[];
}

export enum Gender {
    Kid = 'Kid',
    Men = 'Men',
    Women = 'Women',
    Unisex = 'Unisex',
}

export enum Size {
    Xs = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    Xl = 'XL',
    Xxl = 'XXL',
    Xxxl = 'XXXL'
}
