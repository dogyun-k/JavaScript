            var loopMusic = new Audio( 'audio/loop.mp3' );

            $('#play-btn').on('click', function(){
                loopMusic.play();
            });
            $('#stop-btn').on('click', function(){
                loopMusic.pause();
                loopMusic.currentTime = 0;
            });

            var sound = [];
            sound.push(new Audio( 'audio/01_kick_drum.wav' ));
            sound.push(new Audio( 'audio/02_closed_hihat.wav' ));
            sound.push(new Audio( 'audio/03_open_hihat.wav' ));
            sound.push(new Audio( 'audio/04_clap.wav' ));
            sound.push(new Audio( 'audio/05_snap.wav' ));
            sound.push(new Audio( 'audio/06_crash.wav' ));
            sound.push(new Audio( 'audio/07_tom1.wav' ));
            sound.push(new Audio( 'audio/08_tom2.wav' ));
            sound.push(new Audio( 'audio/09_tambourine.wav' ));


            $(document).on('keydown', function(event){
                if (Number(event.key) >=0 && Number(event.key) <= 9){
                    $('#cell' + event.key).addClass('playing');

                    sound[Number(event.key) - 1].currentTime = 0;
                    sound[Number(event.key) - 1].play();
                    
                }
                
            });
            $(document).on('keyup', function(event){
                if (Number(event.key) >=0 && Number(event.key) <= 9){
                    $('#cell' + event.key).removeClass('playing');
                    var cur = sound[Number(event.key)];
                    
                }
               
            });