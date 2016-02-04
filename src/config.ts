var root = __CONFIG__.PACKAGES.filter((pkg) => pkg.name === 'react-micro-bar-chart')[0];

var config: RequireConfig = {
	packages: [
		{
      name: 'rmbc-reactdom',
      location: root.location + '/bower_components/react',
      main: 'react-dom'
    },
    {
      name: 'rmbc-react',
      location: root.location + '/bower_components/react',
      main: 'react'
    }
	],
	paths: {
		'rmbc-d3': root.location + '/bower_components/d3/d3'
	},
	map: {		
    'react-micro-bar-chart': {
      'rmbc-d3': 'd3',
      'rmbc-React': 'react',
      'rmbc-ReactDOM': 'react-dom'
    }
	}
};

export = config;


