console.log('sw');


let port = null;

self.addEventListener('message', (event) => {

	if (event.data.type === 'azukeru') {
		console.log('@sw receive azukeru');
		
		// �y�[�W������ port ���󂯎��
		port = event.data.port;
	}
	else if (event.data.type === 'toridasu') {
		console.log('@sw received toridasu');
		
		// �y�[�W������ scannerConnection �̃��N�G�X�g��������Ԃ�
		console.log('@sw send port:'+port);
		if (port && event.source) {
			console.log(event.source);
		    event.source.postMessage({ type: 'kaesu', port }, [port]);
		}
	}
});

