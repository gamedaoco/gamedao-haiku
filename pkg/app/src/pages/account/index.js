import {useEffect} from "react";

import {AccountTabs} from "../../@types/account";
import {useRouter} from "next/router";

export function AccountPage(){
	const {push} = useRouter()

	useEffect(()=>{
		push(`/account/${AccountTabs.OVERVIEW}`)
	},[push])

}

export default AccountPage
