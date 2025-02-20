console.log('sw');


let port = null;

self.addEventListener('message', (event) => {

	if (event.data.type === 'azukeru') {
		console.log('@sw receive azukeru');
		
		// ページ側から port を受け取る
		port = event.data.port;
	}
	else if (event.data.type === 'toridasu') {
		console.log('@sw received toridasu');
		
		// ページ側から scannerConnection のリクエストが来たら返す
		console.log('@sw send port:'+port);
		
		if (port && event.source) {
			console.log("now sending");
			//event.source.postMessage({ type: 'kaesu', port }, [port]);
			self.postMessage({ type: 'kaesu', port }, [port]);
		}
	}
});

