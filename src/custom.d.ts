declare module '*.svg' {
	import React from 'react';
	const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVGComponent;
}
declare module '*.png' {
	const content: any;
	export default content;
}
declare module '*.jpg' {
	const content: any;
	export default content;
}
declare module '*.json' {
	const content: any;
	export default content;
}

declare module '*.module.css' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { [key: string]: string };
	export default classes;
}
