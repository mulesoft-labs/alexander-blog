module.exports = {
    selectText: 'Language',
    label: 'English',
    editLinkText: 'Edit this page on GitHub',
    algolia: {
        apiKey: '',
        indexName: '',
        algoliaOptions: {
            facetFilters: ['version:v3', 'tags:doc', 'tags:en']
        }
    },
    sidebar: {
        '/': [{
                title: 'Machine Learning',
                collapsable: false,
                children: [
                    '',
                    'introduction',
                ]
            },
            {
                title: 'Paradigms',
                collapsable: false,
                children: [
                    'paradigms',
                ]
            }, {
                title: 'Learning Concepts',
                collapsable: false,
                children: [
                    'learning-concepts',
                ]
            }, {
                title: 'Training steps',
                collapsable: false,
                children: [
                    'training-steps',
                ]
            }, {
                title: 'Metrics',
                collapsable: false,
                children: [
                    'metrics',
                ]
            }, {
                title: 'Algorithms',
                collapsable: false,
                children: [
                    'algorithms',
                ]
            }, {
                title: 'Outliers',
                collapsable: false,
                children: [
                    'outliers',
                ]
            }, {
                title: 'Temporal Series',
                collapsable: false,
                children: [
                    'temporal-series',
                ]
            },
            {
                title: 'Non Supervised Learning',
                collapsable: false,
                children: [
                    'non-supervised-learning',
                ]
            },
            {
                title: 'Reinforcement Learning',
                collapsable: false,
                children: [
                    'reinforcement-learning',
                ]
            },
            {
                title: 'Speech Processing',
                collapsable: false,
                children: [
                    'speech-processing',
                ]
            }
        ]
    }
};