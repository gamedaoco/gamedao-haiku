import type {Result} from './support'

export type H256 = Uint8Array

export type AccountId32 = Uint8Array

export type CurrencyId = CurrencyId_Token

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export type OrgType = OrgType_Individual | OrgType_Company | OrgType_Dao | OrgType_Hybrid

export interface OrgType_Individual {
  __kind: 'Individual'
}

export interface OrgType_Company {
  __kind: 'Company'
}

export interface OrgType_Dao {
  __kind: 'Dao'
}

export interface OrgType_Hybrid {
  __kind: 'Hybrid'
}

export type AccessModel = AccessModel_Open | AccessModel_Voting | AccessModel_Prime

export interface AccessModel_Open {
  __kind: 'Open'
}

export interface AccessModel_Voting {
  __kind: 'Voting'
}

export interface AccessModel_Prime {
  __kind: 'Prime'
}

export type FeeModel = FeeModel_NoFees | FeeModel_Reserve | FeeModel_Transfer

export interface FeeModel_NoFees {
  __kind: 'NoFees'
}

export interface FeeModel_Reserve {
  __kind: 'Reserve'
}

export interface FeeModel_Transfer {
  __kind: 'Transfer'
}

export type FlowProtocol = FlowProtocol_Grant | FlowProtocol_Raise | FlowProtocol_Lend | FlowProtocol_Loan | FlowProtocol_Share | FlowProtocol_Pool

export interface FlowProtocol_Grant {
  __kind: 'Grant'
}

export interface FlowProtocol_Raise {
  __kind: 'Raise'
}

export interface FlowProtocol_Lend {
  __kind: 'Lend'
}

export interface FlowProtocol_Loan {
  __kind: 'Loan'
}

export interface FlowProtocol_Share {
  __kind: 'Share'
}

export interface FlowProtocol_Pool {
  __kind: 'Pool'
}

export type FlowGovernance = FlowGovernance_No | FlowGovernance_Yes

export interface FlowGovernance_No {
  __kind: 'No'
}

export interface FlowGovernance_Yes {
  __kind: 'Yes'
}

export type ProposalType = ProposalType_General | ProposalType_Withdrawal | ProposalType_Spending

export interface ProposalType_General {
  __kind: 'General'
}

export interface ProposalType_Withdrawal {
  __kind: 'Withdrawal'
}

export interface ProposalType_Spending {
  __kind: 'Spending'
}

export type Majority = Majority_Simple | Majority_Relative | Majority_Absolute

export interface Majority_Simple {
  __kind: 'Simple'
}

export interface Majority_Relative {
  __kind: 'Relative'
}

export interface Majority_Absolute {
  __kind: 'Absolute'
}

export type Unit = Unit_Account | Unit_Token

export interface Unit_Account {
  __kind: 'Account'
}

export interface Unit_Token {
  __kind: 'Token'
}

export type Scale = Scale_Linear | Scale_Quadratic

export interface Scale_Linear {
  __kind: 'Linear'
}

export interface Scale_Quadratic {
  __kind: 'Quadratic'
}

export type Permill = number

export type TokenSymbol = TokenSymbol_ZERO | TokenSymbol_PLAY | TokenSymbol_GAME | TokenSymbol_ACA | TokenSymbol_AUSD | TokenSymbol_DOT | TokenSymbol_LDOT | TokenSymbol_KAR | TokenSymbol_KUSD | TokenSymbol_KSM | TokenSymbol_LKSM | TokenSymbol_TAI | TokenSymbol_BNC | TokenSymbol_VSKSM | TokenSymbol_PHA | TokenSymbol_KINT | TokenSymbol_KBTC

export interface TokenSymbol_ZERO {
  __kind: 'ZERO'
}

export interface TokenSymbol_PLAY {
  __kind: 'PLAY'
}

export interface TokenSymbol_GAME {
  __kind: 'GAME'
}

export interface TokenSymbol_ACA {
  __kind: 'ACA'
}

export interface TokenSymbol_AUSD {
  __kind: 'AUSD'
}

export interface TokenSymbol_DOT {
  __kind: 'DOT'
}

export interface TokenSymbol_LDOT {
  __kind: 'LDOT'
}

export interface TokenSymbol_KAR {
  __kind: 'KAR'
}

export interface TokenSymbol_KUSD {
  __kind: 'KUSD'
}

export interface TokenSymbol_KSM {
  __kind: 'KSM'
}

export interface TokenSymbol_LKSM {
  __kind: 'LKSM'
}

export interface TokenSymbol_TAI {
  __kind: 'TAI'
}

export interface TokenSymbol_BNC {
  __kind: 'BNC'
}

export interface TokenSymbol_VSKSM {
  __kind: 'VSKSM'
}

export interface TokenSymbol_PHA {
  __kind: 'PHA'
}

export interface TokenSymbol_KINT {
  __kind: 'KINT'
}

export interface TokenSymbol_KBTC {
  __kind: 'KBTC'
}
