export const config = {
	modules: [
		{ id: 0, enabled: true, component: 'Dashboard', name: 'Dashboard', url: '/dashboard', icon: 'fa-dashboard' },
		{ id: 1, enabled: true, component: 'Members', name: 'Members', url: '/members', icon: 'fa-users' },
		{ id: 2, enabled: true, component: 'Projects', name: 'Projects', url: '/projects', icon: 'fa-briefcase' },
		{ id: 3, enabled: true, component: 'Campaigns', name: 'Campaigns', url: '/campaigns', icon: 'fa-briefcase' },
		{
			id: 4,
			enabled: true,
			component: 'Contributors',
			name: 'Contributors',
			url: '/contributors',
			icon: 'fa-users',
		},
		{
			id: 5,
			enabled: true,
			component: 'Organizations',
			name: 'Organizations',
			url: '/collectives',
			icon: 'fa-briefcase',
		},
		{ id: 6, enabled: true, component: 'Proposals', name: 'Proposals', url: '/proposals', icon: 'fa-briefcase' },
		{ id: 7, enabled: true, component: 'Votes', name: 'Votes', url: '/votes', icon: 'fa-briefcase' },
		{ id: 8, enabled: true, component: 'Identity', name: 'Identity', url: '/identity', icon: 'fa-briefcase' },
		{ id: 9, enabled: true, component: 'Tokens', name: 'Tokens', url: '/tokens', icon: 'fa-briefcase' },
	],
}
