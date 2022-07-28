import type { Result } from './support';

export type AccountId32 = Uint8Array;

export type OrgType = OrgType_Individual | OrgType_Company | OrgType_Dao | OrgType_Hybrid;

export interface OrgType_Individual {
	__kind: 'Individual';
}

export interface OrgType_Company {
	__kind: 'Company';
}

export interface OrgType_Dao {
	__kind: 'Dao';
}

export interface OrgType_Hybrid {
	__kind: 'Hybrid';
}

export type AccessModel = AccessModel_Open | AccessModel_Voting | AccessModel_Controller;

export interface AccessModel_Open {
	__kind: 'Open';
}

export interface AccessModel_Voting {
	__kind: 'Voting';
}

export interface AccessModel_Controller {
	__kind: 'Controller';
}

export type FeeModel = FeeModel_NoFees | FeeModel_Reserve | FeeModel_Transfer;

export interface FeeModel_NoFees {
	__kind: 'NoFees';
}

export interface FeeModel_Reserve {
	__kind: 'Reserve';
}

export interface FeeModel_Transfer {
	__kind: 'Transfer';
}
