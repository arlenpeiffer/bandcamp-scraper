var bandcamp = require('../lib/index');

var albumUrl = 'http://musique.coeurdepirate.com/album/blonde';
bandcamp.getAlbumInfo(albumUrl, function(error, albumInfo) {
  if (error) {
    console.log(error);
  } else {
    console.log(albumInfo);
  }
});

/*
{ artist: 'Cœur de pirate',
  title: 'Blonde',
  imageUrl: 'http://f4.bcbits.com/img/a1328452291_2.jpg',
  tracks:
   [ { name: 'Lève les voiles',
       url: 'http://musique.coeurdepirate.com/track/l-ve-les-voiles',
       duration: 'P00H01M12S' },
     { name: 'Adieu',
       url: 'http://musique.coeurdepirate.com/track/adieu',
       duration: 'P00H02M27S' },
     { name: 'Danse et danse',
       url: 'http://musique.coeurdepirate.com/track/danse-et-danse',
       duration: 'P00H03M10S' },
     { name: 'Golden Baby',
       url: 'http://musique.coeurdepirate.com/track/golden-baby',
       duration: 'P00H03M07S' },
     { name: 'Ava',
       url: 'http://musique.coeurdepirate.com/track/ava',
       duration: 'P00H03M16S' },
     { name: 'Loin d\'ici',
       url: 'http://musique.coeurdepirate.com/track/loin-dici',
       duration: 'P00H02M43S' },
     { name: 'Les amours dévouées',
       url: 'http://musique.coeurdepirate.com/track/les-amours-d-vou-es',
       duration: 'P00H02M27S' },
     { name: 'Place de la République',
       url: 'http://musique.coeurdepirate.com/track/place-de-la-r-publique',
       duration: 'P00H04M11S' },
     { name: 'Cap Diamant',
       url: 'http://musique.coeurdepirate.com/track/cap-diamant',
       duration: 'P00H02M43S' },
     { name: 'Verseau',
       url: 'http://musique.coeurdepirate.com/track/verseau',
       duration: 'P00H03M53S' },
     { name: 'Saint-Laurent',
       url: 'http://musique.coeurdepirate.com/track/saint-laurent',
       duration: 'P00H03M14S' },
     { name: 'La petite mort',
       url: 'http://musique.coeurdepirate.com/track/la-petite-mort',
       duration: 'P00H03M49S' } ],
  raw:
   { current:
      { purchase_url: null,
        release_date: '07 Nov 2011 00:00:00 GMT',
        download_desc_id: 2197507589,
        download_pref: 2,
        purchase_title: null,
        minimum_price_nonzero: 9,
        require_email: null,
        new_date: '19 Sep 2011 15:29:09 GMT',
        featured_track_id: 3647767496,
        art_id: 1328452291,
        selling_band_id: 841522492,
        require_email_0: null,
        mod_date: '11 Aug 2015 14:08:29 GMT',
        artist: null,
        private: null,
        about: 'Après avoir immortalisé tout un pan de son adolescence dans les chansons pop douces-amères d\'un premier album homonyme, Coeur de pirate s\'attaque aux différentes étapes de la relation amoureuse, d\'où le titre de l\'album, en référence avant tout, à la copine, à l\'amoureuse. L\'album a été enregistré à l\'été 2011 à l\'Hotel2Tango sous la gouverne d\'Howard Bilerman, coréalisateur avec Béatrice Martin.',
        publish_date: '19 Sep 2011 15:29:09 GMT',
        id: 838845289,
        upc: '622406642921',
        new_desc_format: 1,
        auto_repriced: null,
        minimum_price: 9,
        set_price: 9,
        type: 'album',
        credits: 'Réalisation : Howard Bilerman et Béatrice Martin\r\nPrise de son : Howard Bilerman à l’Hôtel2Tango\r\nPrise de son additionnelle : Radwan Moumneh à l’Hôtel2Tango\r\nPrise de son additionnelle pour 4 : François Gueurce au studio Pigalle\r\nPrise de son additionnelle pour 3 : Eric Cheng au studio The Wash ‘N Dry\r\nPrise de son piano : Radwan Moumneh et Martin Léveillé au Studio Revere\r\nPrise de son cordes pour 3, 8 et 12 : Howard Bilerman et Martin Léveillé à l’Hôtel2Tango\r\nMixage :\r\nHoward Bilerman à l’Hôtel2Tango : 1, 6, 7, 9, 11, 12, 13 et 14\r\nEric Cheng au studio The Wash ‘N Dry : 3 et 10\r\nBruno Dejarnac au studio Soyuz : 5 et 8\r\nJulien Delfaud au studio RDPC : 2\r\nPierrick Devin à Good Boy Studio : 4\r\nMatriçage : Marc Thériault – Le Lab Mastering\r\nDirection artistique : Eli Bissonnette\r\nProduction déléguée : Eli Bissonnette, assisté de Jeanne Joly et Laurie Boisvert\r\nPhotographie : Clara Palardy\r\nDesign graphique : Catherine D’Amours',
        is_set_price: null,
        killed: null,
        title: 'Blonde',
        audit: 0,
        band_id: 2534369253 },
     is_preorder: null,
     album_is_preorder: null,
     album_release_date: '07 Nov 2011 00:00:00 GMT',
     preorder_count: null,
     hasAudio: true,
     art_id: 1328452291,
     artThumbURL: 'http://f4.bcbits.com/img/a1328452291_3.jpg',
     artFullsizeUrl: 'http://f4.bcbits.com/img/a1328452291_10.jpg',
     trackinfo:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     playing_from: 'album page',
     featured_track_id: 3647767496,
     initial_track_num: null,
     packages:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     url: 'http://musique.coeurdepirate.com/album/blonde',
     defaultPrice: 7,
     freeDownloadPage: null,
     FREE: 1,
     PAID: 2,
     artist: 'Cœur de pirate',
     item_type: 'album',
     id: 838845289,
     last_subscription_item: null,
     has_discounts: null,
     is_bonus: null,
     play_cap_data: { streaming_limit: 3, streaming_limits_enabled: true },
     client_id_sig: null,
     is_purchased: null,
     is_private_stream: null,
     is_band_member: null },
  url: 'http://musique.coeurdepirate.com/album/blonde' }
*/
