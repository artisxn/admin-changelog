Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'admin-changelog',
            path: '/admin-changelog',
            component: require('./components/Tool'),
        },
    ])
})
