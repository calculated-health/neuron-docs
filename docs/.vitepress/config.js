export default {
	title: 'Neuron',
	description: 'A population health data engine',
	head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "favicons/apple-touch-icon.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicons/favicon-32x32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicons/favicon-16x16.png" }],
        ['link', { rel: "manifest", href: "favicons/site.webmanifest" }],
        ['link', { rel: "mask-icon", href: "favicons/safari-pinned-tab.svg", color: "#3a0839" }],
        ['link', { rel: "shortcut icon", href: "favicons/favicon.ico" }],
        ['meta', { name: "msapplication-TileColor", content: "#3a0839" }],
        ['meta', { name: "msapplication-config", content: "favicons/browserconfig.xml" }],
        ['meta', { name: "theme-color", content: "#ffffff" }],
    ],
    themeConfig: {
        siteTitle: false,
        logo: {
			light: '/assets/logo-dark.svg',
			dark: '/assets/logo-white.svg',
		},
        sidebar: {
            '/': sidebar(),
        },
        nav: [
			{ text: 'Docs', link: '/' },
			{ text: 'Website', link: 'https://calculated.health' }
		],
    }
};

function sidebar() {
    return [
        {
            text: 'Getting Started',
            items: [
                {
                    text: 'Introduction',
                    link: '/getting-started/introduction',
                },
                {
                    text: 'Architecture',
                    link: '/getting-started/architecture',
                },
            ]
        },
        {
            text: 'Measures',
            collapsible: true,
            items: [
                {
                    text: 'Quality',
                    link: '/measures/quality',
                },
            ]
        },
		{
            text: 'Jobs',
            collapsible: true,
            items: [
				{
                    text: 'Overview',
                    link: '/jobs/overview',
                },
                {
                    text: 'StageJob',
                    link: '/jobs/stage',
                },
				{
                    text: 'MeasureJob',
                    link: '/jobs/measure',
                },
				{
                    text: 'MetricJob',
                    link: '/jobs/metric',
                },
            ]
        },
        {
            text: 'Configuration',
            collapsible: true,
            items: [
				{
                    text: 'Overview',
                    link: '/configuration/overview',
                },
                {
                    text: 'Job Parameters',
                    link: '/configuration/job-parameters',
                },
                {
                    text: 'Authentication',
                    link: '/configuration/authentication',
                },
                {
                    text: 'Database',
                    link: '/configuration/database',
                },
                {
                    text: 'Storage',
                    link: '/configuration/storage',
                },
				{
                    text: 'Stage',
                    link: '/configuration/stage',
                },
                {
                    text: 'Measure',
                    link: '/configuration/measure',
                },
				{
                    text: 'Metric',
                    link: '/configuration/metric',
                },
            ]
        },
        {
            text: 'Data Model',
            collapsible: true,
            items: [
                {
					link: '/data-model/inbound',
					text: 'Inbound',
					type: 'page',
					items: [
						{
							link: '/data-model/inbound/ch_patient',
							text: 'ch_patient',
						},
                        {
							link: '/data-model/inbound/ch_coverage',
							text: 'ch_coverage',
						},
						{
							link: '/data-model/inbound/ch_provider_specialty',
							text: 'ch_provider_specialty',
						},
						{
							link: '/data-model/inbound/ch_claim',
							text: 'ch_claim',
						},
						{
							link: '/data-model/inbound/ch_claim_pharmacy',
							text: 'ch_claim_pharmacy',
						},
						{
							link: '/data-model/inbound/ch_clinical_encounter',
							text: 'ch_clinical_encounter',
						},
                        {
							link: '/data-model/inbound/ch_clinical_pharmacy',
							text: 'ch_clinical_pharmacy',
						},
                        {
							link: '/data-model/inbound/ch_clinical_diagnosis',
							text: 'ch_clinical_diagnosis',
						},
                        {
							link: '/data-model/inbound/ch_clinical_procedure',
							text: 'ch_clinical_procedure',
						},
						{
							link: '/data-model/inbound/ch_clinical_observation',
							text: 'ch_clinical_observation',
						},
                        {
							link: '/data-model/inbound/ch_lab',
							text: 'ch_lab',
						},
                        {
							link: '/data-model/inbound/ch_member_monthly',
							text: 'ch_member_monthly',
						},
                        {
							link: '/data-model/inbound/ch_lis_history',
							text: 'ch_lis_history',
						},
					],
				},
                {
					link: '/data-model/materialized',
					text: 'Materialized',
					type: 'page',
					items: [
						{
							link: '/data-model/materialized/ch_event',
							text: 'ch_event',
						}
					],
				},
                {
					link: '/data-model/outbound',
					text: 'Outbound',
					type: 'page',
					items: [
						{
							link: '/data-model/outbound/ch_metric',
							text: 'ch_metric',
						},
						{
							link: '/data-model/outbound/ch_metric_detail',
							text: 'ch_metric_detail',
						},
					],
				},
                {
					link: '/data-model/value-sets',
					text: 'Value Sets',
					type: 'page',
					items: [
						{
							link: '/data-model/mappings/ch_value_set',
							text: 'ch_value_set',
						},
                        {
							link: '/data-model/mappings/ch_value_set_medication',
							text: 'ch_value_set_medication',
						}
					],
				},
				{
					link: '/data-model/meta',
					text: 'Meta',
					type: 'page',
					items: [
						{
							link: '/data-model/meta/ch_meta_measure',
							text: 'ch_meta_measure',
						},
						{
							link: '/data-model/meta/ch_meta_category',
							text: 'ch_meta_category',
						},
						{
							link: '/data-model/meta/ch_meta_metric',
							text: 'ch_meta_metric',
						},
						{
							link: '/data-model/meta/ch_meta_value_set_measure',
							text: 'ch_meta_value_set_measure',
						},
						{
							link: '/data-model/meta/ch_meta_value_set_medication_measure',
							text: 'ch_meta_value_set_medication_measure',
						},
					],
				},
            ]
        }
    ]
}