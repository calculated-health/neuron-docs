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
							link: '/data-model/inbound/patient',
							text: 'Patient',
						},
                        {
							link: '/data-model/inbound/coverage',
							text: 'Coverage',
						},
						{
							link: '/data-model/inbound/provider_specialty',
							text: 'Provider Specialty',
						},
						{
							link: '/data-model/inbound/claim',
							text: 'Claim',
						},
						{
							link: '/data-model/inbound/claim_pharmacy',
							text: 'Claim Pharmacy',
						},
						{
							link: '/data-model/inbound/clinical_encounter',
							text: 'Clinical Encounter',
						},
                        {
							link: '/data-model/inbound/clinical_pharmacy',
							text: 'Clinical Pharmacy',
						},
                        {
							link: '/data-model/inbound/clinical_diagnosis',
							text: 'Clinical Diagnosis',
						},
                        {
							link: '/data-model/inbound/clinical_procedure',
							text: 'Clinical Procedure',
						},
						{
							link: '/data-model/inbound/clinical_observation',
							text: 'Clinical Observation',
						},
                        {
							link: '/data-model/inbound/lab',
							text: 'Lab',
						},
                        {
							link: '/data-model/inbound/monthly_membership',
							text: 'Monthly Membership',
						},
                        {
							link: '/data-model/inbound/subsidy',
							text: 'Subsidy',
						},
					],
				},
                {
					link: '/data-model/materialized',
					text: 'Materialized',
					type: 'page',
					items: [
						{
							link: '/data-model/materialized/event',
							text: 'Event',
						}
					],
				},
                {
					link: '/data-model/outbound',
					text: 'Outbound',
					type: 'page',
					items: [
						{
							link: '/data-model/outbound/metric',
							text: 'Metric',
						},
						{
							link: '/data-model/outbound/metric_detail',
							text: 'Metric Detail',
						},
					],
				},
                {
					link: '/data-model/value-sets',
					text: 'Value Sets',
					type: 'page',
					items: [
						{
							link: '/data-model/mappings/value_set',
							text: 'Value Set',
						},
                        {
							link: '/data-model/mappings/value_set_medication',
							text: 'Value Set Medication',
						}
					],
				},
				{
					link: '/data-model/meta',
					text: 'Meta',
					type: 'page',
					items: [
						{
							link: '/data-model/meta/meta_measure',
							text: 'Meta Measure',
						},
						{
							link: '/data-model/meta/meta_category',
							text: 'Meta Category',
						},
						{
							link: '/data-model/meta/meta_metric',
							text: 'Meta Metric',
						},
						{
							link: '/data-model/meta/meta_value_set_measure',
							text: 'Meta Value Set Measure',
						},
						{
							link: '/data-model/meta/meta_value_set_medication_measure',
							text: 'Meta Value Set Medication Measure',
						},
					],
				},
            ]
        }
    ]
}