// This file is part of meshoptimizer library and is distributed under the terms of MIT License.
// Copyright (C) 2016-2025, by Arseny Kapoulkine (arseny.kapoulkine@gmail.com)
var MeshoptClusterizer = (function () {
	// Built with clang version 19.1.5-wasi-sdk
	// Built from meshoptimizer 0.25
	var wasm =
		'b9H79Tebbbe95x9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gvuuuuueu9Gruuuuuuub9Gxuuuuuuuuuuuueu9Gxuuuuuuuuuuu99eu9GPuuuuuuuuuuuuu99b9Gouuuuuub9GluuuubiXCdilvorwDoqooqkbiibeilve9Weiiviebeoweuecj:Pdkr;Zeqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeY9TW79O9V9Wt9F9I919P29K9nW79O2Wt7S2W94bd39TW79O9V9Wt9F9I919P29K9nW79O2Wt79t9W9Ht9P9H2bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7bD39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bkE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bxL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2Wtbml79IV9RbPDwebcekdHOq:m:ceCdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek;x8JDPue99eux99due99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:qjjjb8Adndnalcb9imbaoal9nmbamcuaocdtaocFFFFi0Egscbyd;01jjbHjjjjbbgzBd:CwamceBd;8wamascbyd;01jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;01jjbHjjjjbbgOBd:KwamciBd;8waihsalhAinazasydbcdtfcbBdbasclfhsaAcufgAmbkaihsalhAinazasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkaihsalhCcbhXindnazasydbcdtgQfgAydbcb9imbaHaQfaXBdbaAaAydbgQcjjjj94VBdbaQaXfhXkasclfhsaCcufgCmbkalci9UhLdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhXaHaAydbcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaXcdtfgXaXydbgXcefBdbaOaXcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaihsalhAindnazasydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaHaCfgCaCydbaQ9RBdbkasclfhsaAcufgAmbxdkkamcuaocdtgsaocFFFFi0EgAcbyd;01jjbHjjjjbbgzBd:CwamceBd;8wamaAcbyd;01jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;01jjbHjjjjbbgOBd:KwamciBd;8wazcbasz:qjjjbhXalci9UhLaihsalhAinaXasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkdnaoTmbcbhsaHhAaXhCaohQinaAasBdbaAclfhAaCydbasfhsaCclfhCaQcufgQmbkkdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhQaHaAydbcdtfgKaKydbgKcefBdbaOaKcdtfasBdbaHaQcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaoTmbcbhsaohAinaHasfgCaCydbaXasfydb9RBdbasclfhsaAcufgAmbkkamaLcbyd;01jjbHjjjjbbgsBd:OwamclBd;8wascbaLz:qjjjbhYamcuaLcK2alcjjjjd0Ecbyd;01jjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihAa8AhsaLhrJbbbbh5inavaAclfydbaK2cdtfgCIdlh8EavaAydbaK2cdtfgXIdlhEavaAcwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgasaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbasclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyascxfa8EaE:tg8Eagah:tggNa8FaE:tg8Faaah:tgaN:tgEJbbbbJbbjZa8Ja8K:tg8Ja8FNa8La8K:tg8Ka8EN:tghahNaEaENaaa8KNaga8JN:tgEaENMM:rg8K:va8KJbbbb9BEg8ENUdbasczfaEa8ENUdbascCfaha8ENUdbascwfa8Maya8NMMJbbnn:vUdba5a8KMh5aAcxfhAascKfhsarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;01jjbHjjjjbbgCBd:WwamcoBd;8waq:Zhhdna3mbcbhsaChAinaAasBdbaAclfhAaLascefgs9hmbkkaEahNhhamcuaLcltalcFFFFd0Ecbyd;01jjbHjjjjbbg8PBd:0wamcrBd;8wcba8Pa8AaCaLz:djjjb8AJFFuuh8MJFFuuh8NJFFuuhydnalci6mbJFFuuhya8AhsaLhAJFFuuh8NJFFuuh8MinascwfIdbgEa8Ma8MaE9EEh8MasclfIdbgEa8Na8NaE9EEh8NasIdbgEayayaE9EEhyascKfhsaAcufgAmbkkah:rhEamaocetgscuaocu9kEcbyd;01jjbHjjjjbbgCBd:4wdndnaoal9nmbaihsalhAinaCasydbcetfcFFi87ebasclfhsaAcufgAmbxdkkaCcFeasz:qjjjb8AkaEJbbbZNh8JcuhIdnalci6mbcbhAJFFuuhEa8AhscuhIinascwfIdba8M:tghahNasIdbay:tghahNasclfIdba8N:tghahNMM:rghaEaIcuSahaE9DVgXEhEaAaIaXEhIascKfhsaLaAcefgA9hmbkkamczfcbcjwz:qjjjb8Aamcwf9cb83ibam9cb83iba8JaxNh8RJbbjZak:th8Lcbh8SJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8Ycbh8ZcbhPinJbbbbhEdna8STmbJbbjZa8S:Z:vhEkJbbbbhhdna8Ya8YNa8Wa8WNa8Xa8XNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8VaENh8Ka8UaENh8EaRaENh5aIhLdndndndndna8SaPVTmbamydwg80Tmea8YahNh8Fa8XahNhaa8WahNhgaeamydbcdtfh81cbh3JFFuuhEcvhQcuhLindnaza81a3cdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAindndnaCaiaAydbgKcx2fgsclfydbgrcetf8Vebcs4aCasydbgXcetf8Vebcs4faCascwfydbglcetf8Vebcs4fgombcbhsxekcehsazaXcdtfydbgXceSmbcehsazarcdtfydbgrceSmbcehsazalcdtfydbglceSmbdnarcdSaXcdSfalcdSfcd6mbaocefhsxekaocdfhskdnasaQ9kmba8AaKcK2fgXIdwa8K:tghahNaXIdba5:tghahNaXIdla8E:tghahNMM:ra8J:va8LNJbbjZMJ9VO:d86JbbjZaXIdCa8FNaXIdxagNaaaXIdzNMMakN:tghahJ9VO:d869DENghaEasaQ6ahaE9DVgXEhEaKaLaXEhLasaQaXEhQkaAclfhAavcufgvmbkka3cefg3a809hmbkkaLcu9hmekama8KUd:ODama8EUd:KDama5Ud:GDamcuBd:qDamcFFF;7rBdjDa8Pcba8AaYamc:GDfamc:qDfamcjDfz:ejjjbamyd:qDhLdndnaxJbbbb9ETmba8SaD6mbaLcuSmeceh3amIdjDa8R9EmixdkaLcu9hmekdna8STmbabaPcltfgzam8Pib83dbazcwfamcwf8Pib83dbaPcefhPkc3hzinazc98Smvamc:Cwfazfydbcbyd;41jjbH:bjjjbbazc98fhzxbkkcbh3a8Saq9pmbamydwaCaiaLcx2fgsydbcetf8Vebcs4aCascwfydbcetf8Vebcs4faCasclfydbcetf8Vebcs4ffaw9nmekcbhscbhAdna8ZTmbcbhAamczfhXinamczfaAcdtfaXydbgQBdbaXclfhXaAaYaQfRbbTfhAa8Zcufg8ZmbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDaAc;8eaAclfc:bd6Eh8ZinamcjDfasfcFFF;7rBdbasclfgscz9hmbka8Zcdth80dnalTmbaeaXcdtfhocbhrindnazaoarcdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAcuhQcuhsinazaiaAydbgKcx2fgXclfydbcdtfydbazaXydbcdtfydbfazaXcwfydbcdtfydbfgXasaXas6gXEhsaKaQaXEhQaAclfhAavcufgvmbkaQcuSmba8AaQcK2fgAIdwa8M:tgEaENaAIdbay:tgEaENaAIdla8N:tgEaENMM:rhEcbhAindndnasamc:qDfaAfgvydbgX6mbasaX9hmeaEamcjDfaAfIdb9FTmekavasBdbamc:GDfaAfaQBdbamcjDfaAfaEUdbxdkaAclfgAcz9hmbkkarcefgral9hmbkkamczfa80fhQcbhscbhAindnamc:GDfasfydbgXcuSmbaQaAcdtfaXBdbaAcefhAkasclfgscz9hmbkaAa8Zfg8ZTmbJFFuuhhcuhKamczfhsa8ZhvcuhQina8AasydbgXcK2fgAIdwa8M:tgEaENaAIdbay:tgEaENaAIdla8N:tgEaENMM:rhEdndnazaiaXcx2fgAclfydbcdtfydbazaAydbcdtfydbfazaAcwfydbcdtfydbfgAaQ6mbaAaQ9hmeaEah9DTmekaEhhaAhQaXhKkasclfhsavcufgvmbkaKcuSmbaKhLkdnamaiaLcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YkcbhXinaOaHaraXcdtfydbcdtgAfydbcdtfgKhsazaAfgvydbgQhAdnaQTmbdninasydbaLSmeasclfhsaAcufgATmdxbkkasaKaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaLcK2fgsIdbhEasIdlhhasIdwh8KasIdxh8EasIdzh5asIdCh8FaYaLfce86bba8Ya8FMh8Ya8Xa5Mh8Xa8Wa8EMh8Wa8Va8KMh8Va8UahMh8UaRaEMhRamydxh8Sxbkkamc:WDf8KjjjjbaPk;Vvivuv99lu8Jjjjjbca9Rgv8Kjjjjbdndnalcw0mbaiydbhoaeabcitfgralcdtciVBdlaraoBdbdnalcd6mbaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkkalabfhrxekcbhDavczfcwfcbBdbav9cb83izavcwfcbBdbav9cb83ibJbbjZhqJbbjZhkinadaiaDcdtfydbcK2fhwcbhrinavczfarfgoawarfIdbgxaoIdbgm:tgPakNamMgmUdbavarfgoaPaxam:tNaoIdbMUdbarclfgrcx9hmbkJbbjZaqJbbjZMgq:vhkaDcefgDal9hmbkcbhoadcbcecdavIdlgxavIdwgm9GEgravIdbgPam9GEaraPax9GEgscdtgrfhzavczfarfIdbhxaihralhwinaiaocdtfgDydbhHaDarydbgOBdbaraHBdbarclfhraoazaOcK2fIdbax9Dfhoawcufgwmbkaeabcitfhrdndnaocv6mbaoalc98f6mekaraiydbBdbaralcdtciVBdlaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkalabfhrxekaraxUdbararydlc98GasVBdlabcefaeadaiaoz:djjjbhwararydlciGawabcu7fcdtVBdlawaeadaiaocdtfalao9Rz:djjjbhrkavcaf8Kjjjjbark;yddvue99dninabaecitfgrydlgwcl6mednawciGgDci9hmbabaecitfhbcbhecehqindnaiabydbgDfRbbmbcbhqadaDcK2fgkIdwalIdw:tgxaxNakIdbalIdb:tgxaxNakIdlalIdl:tgxaxNMM:rgxaoIdb9DTmbaoaxUdbavaDBdbarydlhwkabcwfhbaecefgeawcd46mbkaqceGTmdarawciGBdlskdnabcbawcd4gwalaDcdtfIdbarIdb:tgxJbbbb9FEgkaw7aecefgwfgecitfydlabakawfgwcitfydlVci0mbaraDBdlkabawadaialavaoz:ejjjbax:laoIdb9Fmbkkkjlevudnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0abydxaq9pVakVgDce9hmbavawcltfgxab8Pdb83dbaxcwfabcwfgx8Pdb83dbabydbhqdnaxydbgkTmbaoaqcdtfhxakhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkabaqakfBdbabydxhxab9cb83dwababydlaxci2fBdlaP8Vebhscbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk:zPrHue99eue99eue99eu8Jjjjjbc;W;Gb9Rgx8KjjjjbdndnalmbcbhmxekcbhPaxc:m;Gbfcbc;Kbz:qjjjb8Aaxcualci9UgscltascjjjjiGEcbyd;01jjbHjjjjbbgzBd:m9GaxceBd;S9GaxcuascK2gHcKfalcpFFFe0Ecbyd;01jjbHjjjjbbgOBd:q9GaxcdBd;S9Gdnalci6gAmbarcd4hCascdthXaOhQazhLinavaiaPcx2fgrydbaC2cdtfhKavarcwfydbaC2cdtfhYavarclfydbaC2cdtfh8AcbhraLhEinaQarfgmaKarfg3Idbg5a8Aarfg8EIdbg8Fa5a8F9DEg5UdbamaYarfgaIdbg8Fa5a8Fa59DEg8FUdbamcxfgma3Idbg5a8EIdbgha5ah9EEg5UdbamaaIdbgha5aha59EEg5UdbaEa8Fa5MJbbbZNUdbaEaXfhEarclfgrcx9hmbkaQcKfhQaLclfhLaPcefgPas9hmbkkaOaHfgr9cb83dbarczf9cb83dbarcwf9cb83dbaxcuascx2gralc:bjjjl0Ecbyd;01jjbHjjjjbbgCBdN9GaxciBd;S9GascdthgazarfhvaChHazhLcbhPinaxcbcj;Gbz:qjjjbhEaPas2cdthadnaAmbaLhrash3inaEarydbgmc8F91cjjjj94Vam7gmcQ4cx2fg8Ea8EydwcefBdwaEamcd4cFrGcx2fg8Ea8EydbcefBdbaEamcx4cFrGcx2fgmamydlcefBdlarclfhra3cufg3mbkkazaafh8AaCaafhXcbhmcbh3cbh8EcbhainaEamfgrydbhQara3BdbarcwfgKydbhYaKaaBdbarclfgrydbhKara8EBdbaQa3fh3aYaafhaaKa8Efh8Eamcxfgmcj;Gb9hmbkdnaAmbcbhravhminamarBdbamclfhmasarcefgr9hmbkaAmbavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cd4cFrGcx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3BdbarclfhramcufgmmbkaHhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cx4cFrGcx2fg8Ea8Eydlg8EcefBdlava8Ecdtfa3BdbarclfhramcufgmmbkavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91cjjjj94Va8E7cQ4cx2fg8Ea8Eydwg8EcefBdwaXa8Ecdtfa3BdbarclfhramcufgmmbkkaHagfhHaLagfhLaPcefgPci9hmbkaEaocetgrcuaocu9kEcbyd;01jjbHjjjjbbgKBd:y9GaEclBd;S9Gdndnaoal9nmbaihralhminaKarydbcetfcFFi87ebarclfhramcufgmmbxdkkaKcFearz:qjjjb8AkcbhmaEascbyd;01jjbHjjjjbbg8ABd:C9GaOaCaCascdtfaCascitfa8AascbazaKaiawaDaqakz:hjjjbcbh8Ednalci6gambcbh8Ea8Ahrash3ina8EarRbbfh8Earcefhra3cufg3mbkkaEcwf9cb83ibaE9cb83ibalawc9:fgrfcufar9UhrasaDfcufaD9Uh3dnaambara3ara30EhYcbhra8Ehacbhmincbh3dnarTmba8AarfRbbceSh3kamaEaiaCydbcx2fgQydbaQclfydbaQcwfydbaKabaeadamawaqa3a3ce7a8EaY9nVaaamfaY6VGz:fjjjbfhmaCclfhCaaa8AarfRbb9Rhaasarcefgr9hmbkaEydxTmbabamcltfgraE8Pib83dbarcwfaEcwf8Pib83dbamcefhmkczhrinarc98SmeaEc:m;Gbfarfydbcbyd;41jjbH:bjjjbbarc98fhrxbkkaxc;W;Gbf8Kjjjjbamk;LXDXue99lue99iul9:eur99lu8Jjjjjbc;qb9RgP8Kjjjjbdndnaoc8Y9imbalaeavawaDaqaxz1jjjbxekaxhsaxhzdnavax0gHmbdnavTmbcbhOaehzavhAinawaDazydbcx2fgCcwfydbcetfgX8VebhQawaCclfydbcetfgL8VebhKawaCydbcetfgC8VebhYaXce87ebaLce87ebaCce87ebaOaKcs4aYcs4faQcs4ffhOazclfhzaAcufgAmbkaehzavhAinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaAcufgAmbkcehzaqhsaOaq0mekalce86bbalcefcbavcufz:qjjjb8AxekaPaiBdxaPadBdwaPaeBdlavakaqci9UgCakaCak6EaHEgK9Rh8AaxaK9RhEaKcufh3aKceth5aKcdtgCc98fh8EavcitgOaC9Rarfc98fh8FascufhaavcufhharaOfhgJbbjZas:Y:vh8JaravcdtgYfc94fh8KcbazceakaxSEg8Lcdtg8M9Rh8NJFFuuhycuh8PcbhIcbh8RinaPclfa8RcdtfydbhQaPc8WfcKfcb8Pd:y1jjbg8S83ibaPc8Wfczfcb8Pd:q1jjbgR83ibaPc8Wfcwfcb8Pd11jjbg8U83ibaPcb8Pdj1jjbg8V83i8WaPczfcKfa8S83ibaPczfczfaR83ibaPczfcwfa8U83ibaPa8V83izaQaYfh8WcbhXinabaQaXcdtgLfydbcK2fhAcbhzinaPc8WfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaPIdnaPId8W:tg8ZaPId9iaPIdU:tg80Nh81aba8WaXcu7cdtfydbcK2fhAcbhzaPId80hBaPId9eh83inaPczfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaraLfgza83aB:tg8Xa80Na8Za8XNa81MMUdbazaYfaPId8KaPIdC:tg8XaPIdyaPIdK:tg8YNaPIdaaPIdz:tg8Za8XNa8Za8YNMMUdbaXcefgXav9hmbkcbhUdnaHmbcbhAaQhzaghCavhXinawaDazydbcx2fgOcwfydbcetfgL8Vebh8WawaOclfydbcetfg858VebhUawaOydbcetfgO8Vebh86aLce87eba85ce87ebaOce87ebaCaAaUcs4a86cs4fa8Wcs4ffgABdbazclfhzaCclfhCaXcufgXmbkavhCinawaDaQydbcx2fgzcwfydbcetfcFFi87ebawazclfydbcetfcFFi87ebawazydbcetfcFFi87ebaQclfhQaCcufgCmbkaghUkdndndndndndndndndndna5av0mba5ax0meavaK6mda3a8A9pmDcehLa8AhXaUTmlxrka3ah9pmwa5ax9nmdxlkdnavavaK9UgzaK29RazaE20mba3a8A9pmwaUTh87ceh85a8AhLxvka3ah6mixrka3ah9pmokcbhLahhXaUmikJFFuuh8XcbhQa3hzindnazcefgCaK6mbaLavaC9RgOaK6GmbarazcdtfIdbg8YaC:YNa8Kavaz9RcdtfIdbg8ZaO:YNMg80a8X9Embdndna8JaOaaf:YNg81:lJbbb9p9DTmba81:OhAxekcjjjj94hAka8ZasaA2aO9R:YNh8Zdndna8Jazasf:YNg81:lJbbb9p9DTmba81:OhOxekcjjjj94hOkamasaO2aC9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgOEh8XaCaQaOEhQkaza8LfgzaX6mbxlkkaUTh87cbh85ahhLkJFFuuh8XcbhQa8AhCa8FhAa8EhOaKhzindnazazaK9UgXaK29RaXaE20mbdna85TmbaCaCaK9UgXaK29RaXaE20mekaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9EmbazhXaCh8Wdna87mbaUaOfydbgXh8Wkdndna8Ja8Waaf:YNg81:lJbbb9p9DTmba81:Oh86xekcjjjj94h86ka8Zasa862a8W9R:YNh8Zdndna8JaXaaf:YNg81:lJbbb9p9DTmba81:Oh8Wxekcjjjj94h8Wkamasa8W2aX9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgXEh8XazaQaXEhQkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaL6mbxdkkJFFuuh8XcbhQa8AhCa8FhAa8EhOaKhzindnazaK6mbaLaCaK6GmbaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9Embdndna8JaUaOfydbg8Waaf:YNg81:lJbbb9p9DTmba81:Oh85xekcjjjj94h85kamasa852a8W9R:Yg81a8YNa8Za81NMNa80Mg8Ya8Xa8Ya8X9Dg8WEh8XazaQa8WEhQkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaX6mbkkaQTmba8Xay9DTmba8XhyaQhIa8Rh8Pka8Rcefg8Rci9hmbkdna8Pcb9ombalaeavawaDaqaxz1jjjbxekaravcdtg8WfhLdnaITmbaPclfa8PcdtfydbhzaIhCinaLazydbfcb86bbazclfhzaCcufgCmbkkdnavaI9nmbaPclfa8PcdtfydbaIcdtfhzavaI9RhCinaLazydbfce86bbazclfhzaCcufgCmbkkcbhYindnaYa8PSmbcbhzaraPclfaYcdtfydbgKa8Wz:pjjjbhCavhXaIhOinaKaOazaLaCydbgQfRbbgAEcdtfaQBdbaCclfhCaOaAfhOazaA9RcefhzaXcufgXmbkkaYcefgYci9hmbkabaeadaialaIaocefgCarawaDaqakaxamz:hjjjbabaeaIcdtgzfadazfaiazfalaIfavaI9RaCarawaDaqakaxamz:hjjjbkaPc;qbf8Kjjjjbk1iePudnadTmbavci9UgrcufhwcbhDindndndnadaD9RaoaDaofad0EgqTmbcbhkaeaDcdtfgxhmaqhPinaialamydbcx2fgscwfydbcetfgz8VebhHaiasclfydbcetfgO8VebhAaiasydbcetfgs8VebhCazce87ebaOce87ebasce87ebakaAcs4aCcs4faHcs4ffhkamclfhmaPcufgPmbkaqhsinaialaxydbcx2fgmcwfydbcetfcFFi87ebaiamclfydbcetfcFFi87ebaiamydbcetfcFFi87ebaxclfhxascufgsmbkakav0mekabaDfgxce86bbaxcefcbaqcufz:qjjjb8AxekabaDfgxce86bbaxcefcbawz:qjjjb8AarhqkaqaDfgDad6mbkkk;Nkovud99euv99eul998Jjjjjbc:W;ae9Rgo8KjjjjbdndnadTmbavcd4hrcbhwcbhDindnaiaeclfydbar2cdtfgvIdbaiaeydbar2cdtfgqIdbgk:tgxaiaecwfydbar2cdtfgmIdlaqIdlgP:tgsNamIdbak:tgzavIdlaP:tgPN:tgkakNaPamIdwaqIdwgH:tgONasavIdwaH:tgHN:tgPaPNaHazNaOaxN:tgxaxNMM:rgsJbbbb9Bmbaoc:W:qefawcx2fgAakas:vUdwaAaxas:vUdlaAaPas:vUdbaoc8Wfawc8K2fgAaq8Pdb83dbaAav8Pdb83dxaAam8Pdb83dKaAcwfaqcwfydbBdbaAcCfavcwfydbBdbaAcafamcwfydbBdbawcefhwkaecxfheaDcifgDad6mbkab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbawTmeaocbBd8Sao9cb83iKao9cb83izaoczfaoc8Wfawci2cxaoc8Sfcbcrz:kjjjbaoIdKhCaoIdChXaoIdzhQao9cb83iwao9cb83ibaoaoc:W:qefawcxaoc8Sfcbciz:kjjjbJbbjZhkaoIdwgPJbbbbJbbjZaPaPNaoIdbgPaPNaoIdlgsasNMM:rgx:vaxJbbbb9BEgzNhxasazNhsaPazNhzaoc:W:qefheawhvinaecwfIdbaxNaeIdbazNasaeclfIdbNMMgPakaPak9DEhkaecxfheavcufgvmbkabaCUdwabaXUdlabaQUdbabaoId3UdxdndnakJ;n;m;m899FmbJbbbbhPaoc:W:qefheaoc8WfhvinaCavcwfIdb:taecwfIdbgHNaQavIdb:taeIdbgONaXavclfIdb:taeclfIdbgLNMMaxaHNazaONasaLNMM:vgHaPaHaP9EEhPavc8KfhvaecxfheawcufgwmbkabaxUd8KabasUdaabazUd3abaCaxaPN:tUdKabaXasaPN:tUdCabaQazaPN:tUdzabJbbjZakakN:t:rgkUdydndnaxJbbj:;axJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;axJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohexekcjjjj94hekabae86b8UdndnasJbbj:;asJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;asJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabav86bRdndnazJbbj:;azJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;azJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohqxekcjjjj94hqkabaq86b8SdndnaecKtcK91:YJbb;:9c:vax:t:lavcKtcK91:YJbb;:9c:vas:t:laqcKtcK91:YJbb;:9c:vaz:t:lakMMMJbb;:9cNJbbjZMgk:lJbbb9p9DTmbak:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbkaoc:W;aef8Kjjjjbk;Iwwvul99iud99eue99eul998Jjjjjbcje9Rgr8Kjjjjbavcd4hwaicd4hDdndnaoTmbarc;abfcbaocdtgvz:qjjjb8Aarc;Gbfcbavz:qjjjb8AarhvarcafhiaohqinavcFFF97BdbaicFFF;7rBdbaiclfhiavclfhvaqcufgqmbkdnadTmbcbhkinaeakaD2cdtfgvIdwhxavIdlhmavIdbhPalakaw2cdtfIdbhsarc;abfhzarhiarc;GbfhHarcafhqc:G1jjbhvaohOinasavcwfIdbaxNavIdbaPNavclfIdbamNMMgAMhCakhXdnaAas:tgAaqIdbgQ9DgLmbaHydbhXkaHaXBdbakhXdnaCaiIdbgK9EmbazydbhXaKhCkazaXBdbaiaCUdbaqaAaQaLEUdbavcxfhvaqclfhqaHclfhHaiclfhiazclfhzaOcufgOmbkakcefgkad9hmbkkadThkJbbbbhCcbhXarc;abfhvarc;Gbfhicbhqinalavydbgzaw2cdtfIdbalaiydbgHaw2cdtfIdbaeazaD2cdtfgzIdwaeaHaD2cdtfgHIdw:tgsasNazIdbaHIdb:tgsasNazIdlaHIdl:tgsasNMM:rMMgsaCasaC9EgzEhCaqaXazEhXaiclfhiavclfhvaoaqcefgq9hmbkaCJbbbZNhKxekadThkcbhXJbbbbhKkJbbbbhCdnaearc;abfaXcdtgifydbgqaD2cdtfgvIdwaearc;GbfaifydbgzaD2cdtfgiIdwgm:tgsasNavIdbaiIdbgY:tgAaANavIdlaiIdlgP:tgQaQNMM:rgxJbbbb9ETmbaxalaqaw2cdtfIdbMalazaw2cdtfIdb:taxaxM:vhCkasaCNamMhmaQaCNaPMhPaAaCNaYMhYdnakmbaDcdthvawcdthiindnalIdbg8AaecwfIdbam:tgCaCNaeIdbaY:tgsasNaeclfIdbaP:tgAaANMM:rgQMgEaK9ETmbJbbbbhxdnaQJbbbb9ETmbaEaK:taQaQM:vhxkaxaCNamMhmaxaANaPMhPaxasNaYMhYa8AaKaQMMJbbbZNhKkaeavfhealaifhladcufgdmbkkabaKUdxabamUdwabaPUdlabaYUdbarcjef8Kjjjjbkjeeiu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwdnaiTmbawceawce0EhDarhiinaiaeadRbbcdtfydbBdbadcefhdaiclfhiaDcufgDmbkkabarawaladaoz:jjjjbarcj8Wf8Kjjjjbk:Reeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrz:kjjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk:3lequ8JjjjjbcjP9Rgl8Kjjjjbcbhvalcjxfcbaiz:qjjjb8AdndnadTmbcjehoaehrincuhwarhDcuhqavhkdninawakaoalcjxfaDcefRbbfRbb9RcFeGci6aoalcjxfaDRbbfRbb9RcFeGci6faoalcjxfaDcdfRbbfRbb9RcFeGci6fgxaq9mgmEhwdnammbaxce0mdkaxaqaxaq9kEhqaDcifhDadakcefgk9hmbkkaeawci2fgDcdfRbbhqaDcefRbbhxaDRbbhkaeavci2fgDcifaDawav9Rci2z:tjjjb8Aakalcjxffaocefgo86bbaxalcjxffao86bbaDcdfaq86bbaDcefax86bbaDak86bbaqalcjxffao86bbarcifhravcefgvad9hmbkalcFeaicetz:qjjjbhoadci2gDceaDce0EhqcbhxindnaoaeRbbgkcetfgw8UebgDcu9kmbawax87ebaocjlfaxcdtfabakcdtfydbBdbaxhDaxcefhxkaeaD86bbaecefheaqcufgqmbkaxcdthDxekcbhDkabalcjlfaDz:pjjjb8AalcjPf8Kjjjjbk9teiucbcbyd;81jjbgeabcifc98GfgbBd;81jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;81jjbgeabcrfc94GfgbBd;81jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd;81jjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd;81jjbfgdBd;81jjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk:;Deludndndnadch9pmbabaeSmdaeabadfgi9Rcbadcet9R0mekabaead;8qbbxekaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocd4cefciGgiTmbaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglcd4cefcrGgdTmbavadcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaiaeydzBdzaiaeydCBdCaiaeydKBdKaiaeyd3Bd3aecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaiaeRbe86beaiaeRbd86bdaiaeRbi86biaiaeRbl86blaiaeRbv86bvaiaeRbo86boaiaeRbr86braicwfhiaecwfhealc94fglmbkkabkk:nedbcjwktFFuuFFuuFFuubbbbFFuFFFuFFFuFbbbbbbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;0wkxebbbdbbbjNbb'; // embed! wasm

	var wasmpack = new Uint8Array([
		32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67,
		24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115,
	]);

	if (typeof WebAssembly !== 'object') {
		return {
			supported: false,
		};
	}

	var instance;

	var ready = WebAssembly.instantiate(unpack(wasm), {}).then(function (result) {
		instance = result.instance;
		instance.exports.__wasm_call_ctors();
	});

	function unpack(data) {
		var result = new Uint8Array(data.length);
		for (var i = 0; i < data.length; ++i) {
			var ch = data.charCodeAt(i);
			result[i] = ch > 96 ? ch - 97 : ch > 64 ? ch - 39 : ch + 4;
		}
		var write = 0;
		for (var i = 0; i < data.length; ++i) {
			result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
		}
		return result.buffer.slice(0, write);
	}

	function assert(cond) {
		if (!cond) {
			throw new Error('Assertion failed');
		}
	}

	function bytes(view) {
		return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
	}

	var BOUNDS_SIZE = 48;
	var MESHLET_SIZE = 16;

	function extractMeshlet(buffers, index) {
		var vertex_offset = buffers.meshlets[index * 4 + 0];
		var triangle_offset = buffers.meshlets[index * 4 + 1];
		var vertex_count = buffers.meshlets[index * 4 + 2];
		var triangle_count = buffers.meshlets[index * 4 + 3];

		return {
			vertices: buffers.vertices.subarray(vertex_offset, vertex_offset + vertex_count),
			triangles: buffers.triangles.subarray(triangle_offset, triangle_offset + triangle_count * 3),
		};
	}

	function buildMeshlets(
		fun,
		indices,
		vertex_positions,
		vertex_count,
		vertex_positions_stride,
		max_vertices,
		min_triangles,
		max_triangles,
		parama,
		paramb
	) {
		var sbrk = instance.exports.sbrk;
		var max_meshlets = instance.exports.meshopt_buildMeshletsBound(indices.length, max_vertices, min_triangles);

		// allocate memory
		var meshletsp = sbrk(max_meshlets * MESHLET_SIZE);
		var meshlet_verticesp = sbrk(indices.length * 4);
		var meshlet_trianglesp = sbrk(indices.length);

		var indicesp = sbrk(indices.byteLength);
		var verticesp = sbrk(vertex_positions.byteLength);

		// copy input data to wasm memory
		var heap = new Uint8Array(instance.exports.memory.buffer);
		heap.set(bytes(indices), indicesp);
		heap.set(bytes(vertex_positions), verticesp);

		var count = fun(
			meshletsp,
			meshlet_verticesp,
			meshlet_trianglesp,
			indicesp,
			indices.length,
			verticesp,
			vertex_count,
			vertex_positions_stride,
			max_vertices,
			min_triangles,
			max_triangles,
			parama,
			paramb
		);

		// heap might (will?) have grown -> re-acquire
		heap = new Uint8Array(instance.exports.memory.buffer);

		var meshletBytes = heap.subarray(meshletsp, meshletsp + count * MESHLET_SIZE);
		var meshlets = new Uint32Array(meshletBytes.buffer, meshletBytes.byteOffset, meshletBytes.byteLength / 4).slice();

		for (var i = 0; i < count; ++i) {
			var vertex_offset = meshlets[i * 4 + 0];
			var triangle_offset = meshlets[i * 4 + 1];
			var vertex_count = meshlets[i * 4 + 2];
			var triangle_count = meshlets[i * 4 + 3];

			instance.exports.meshopt_optimizeMeshlet(
				meshlet_verticesp + vertex_offset * 4,
				meshlet_trianglesp + triangle_offset,
				triangle_count,
				vertex_count
			);
		}

		var last_vertex_offset = meshlets[(count - 1) * 4 + 0];
		var last_triangle_offset = meshlets[(count - 1) * 4 + 1];
		var last_vertex_count = meshlets[(count - 1) * 4 + 2];
		var last_triangle_count = meshlets[(count - 1) * 4 + 3];

		var used_vertices = last_vertex_offset + last_vertex_count;
		var used_triangles = last_triangle_offset + last_triangle_count * 3;

		var result = {
			meshlets: meshlets,
			vertices: new Uint32Array(heap.buffer, meshlet_verticesp, used_vertices).slice(),
			triangles: new Uint8Array(heap.buffer, meshlet_trianglesp, used_triangles * 3).slice(),
			meshletCount: count,
		};

		// reset memory
		sbrk(meshletsp - sbrk(0));

		return result;
	}

	function extractBounds(boundsp) {
		var bounds_floats = new Float32Array(instance.exports.memory.buffer, boundsp, BOUNDS_SIZE / 4);

		// see meshopt_Bounds in meshoptimizer.h for layout
		return {
			centerX: bounds_floats[0],
			centerY: bounds_floats[1],
			centerZ: bounds_floats[2],
			radius: bounds_floats[3],
			coneApexX: bounds_floats[4],
			coneApexY: bounds_floats[5],
			coneApexZ: bounds_floats[6],
			coneAxisX: bounds_floats[7],
			coneAxisY: bounds_floats[8],
			coneAxisZ: bounds_floats[9],
			coneCutoff: bounds_floats[10],
		};
	}

	function computeMeshletBounds(buffers, vertex_positions, vertex_count, vertex_positions_stride) {
		var sbrk = instance.exports.sbrk;

		var results = [];

		// allocate memory that's constant for all meshlets
		var verticesp = sbrk(vertex_positions.byteLength);
		var meshlet_verticesp = sbrk(buffers.vertices.byteLength);
		var meshlet_trianglesp = sbrk(buffers.triangles.byteLength);
		var resultp = sbrk(BOUNDS_SIZE);

		// copy vertices to wasm memory
		var heap = new Uint8Array(instance.exports.memory.buffer);
		heap.set(bytes(vertex_positions), verticesp);
		heap.set(bytes(buffers.vertices), meshlet_verticesp);
		heap.set(bytes(buffers.triangles), meshlet_trianglesp);

		for (var i = 0; i < buffers.meshletCount; ++i) {
			var vertex_offset = buffers.meshlets[i * 4 + 0];
			var triangle_offset = buffers.meshlets[i * 4 + 0 + 1];
			var triangle_count = buffers.meshlets[i * 4 + 0 + 3];

			instance.exports.meshopt_computeMeshletBounds(
				resultp,
				meshlet_verticesp + vertex_offset * 4,
				meshlet_trianglesp + triangle_offset,
				triangle_count,
				verticesp,
				vertex_count,
				vertex_positions_stride
			);

			results.push(extractBounds(resultp));
		}

		// reset memory
		sbrk(verticesp - sbrk(0));

		return results;
	}

	function computeClusterBounds(indices, vertex_positions, vertex_count, vertex_positions_stride) {
		var sbrk = instance.exports.sbrk;

		// allocate memory
		var resultp = sbrk(BOUNDS_SIZE);
		var indicesp = sbrk(indices.byteLength);
		var verticesp = sbrk(vertex_positions.byteLength);

		// copy input data to wasm memory
		var heap = new Uint8Array(instance.exports.memory.buffer);
		heap.set(bytes(indices), indicesp);
		heap.set(bytes(vertex_positions), verticesp);

		instance.exports.meshopt_computeClusterBounds(resultp, indicesp, indices.length, verticesp, vertex_count, vertex_positions_stride);

		var result = extractBounds(resultp);

		// reset memory
		sbrk(resultp - sbrk(0));

		return result;
	}

	function computeSphereBounds(positions, count, positions_stride, radii, radii_stride) {
		var sbrk = instance.exports.sbrk;

		// allocate memory
		var resultp = sbrk(BOUNDS_SIZE);
		var positionsp = sbrk(positions.byteLength);
		var radiip = radii ? sbrk(radii.byteLength) : 0;

		// copy input data to wasm memory
		var heap = new Uint8Array(instance.exports.memory.buffer);
		heap.set(bytes(positions), positionsp);
		if (radii) {
			heap.set(bytes(radii), radiip);
		}

		instance.exports.meshopt_computeSphereBounds(resultp, positionsp, count, positions_stride, radiip, radii ? radii_stride : 0);

		var result = extractBounds(resultp);

		// reset memory
		sbrk(resultp - sbrk(0));

		return result;
	}

	return {
		ready: ready,
		supported: true,
		buildMeshlets: function (indices, vertex_positions, vertex_positions_stride, max_vertices, max_triangles, cone_weight) {
			assert(indices.length % 3 == 0);
			assert(vertex_positions instanceof Float32Array);
			assert(vertex_positions.length % vertex_positions_stride == 0);
			assert(vertex_positions_stride >= 3);
			assert(max_vertices > 0 && max_vertices <= 256);
			assert(max_triangles >= 1 && max_triangles <= 512);

			cone_weight = cone_weight || 0.0;

			var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);

			return buildMeshlets(
				instance.exports.meshopt_buildMeshletsFlex,
				indices32,
				vertex_positions,
				vertex_positions.length / vertex_positions_stride,
				vertex_positions_stride * 4,
				max_vertices,
				max_triangles,
				max_triangles,
				cone_weight,
				0.0
			);
		},
		buildMeshletsFlex: function (
			indices,
			vertex_positions,
			vertex_positions_stride,
			max_vertices,
			min_triangles,
			max_triangles,
			cone_weight,
			split_factor
		) {
			assert(indices.length % 3 == 0);
			assert(vertex_positions instanceof Float32Array);
			assert(vertex_positions.length % vertex_positions_stride == 0);
			assert(vertex_positions_stride >= 3);
			assert(max_vertices > 0 && max_vertices <= 256);
			assert(min_triangles >= 1 && max_triangles <= 512);
			assert(min_triangles <= max_triangles);

			cone_weight = cone_weight || 0.0;
			split_factor = split_factor || 0.0;

			var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);

			return buildMeshlets(
				instance.exports.meshopt_buildMeshletsFlex,
				indices32,
				vertex_positions,
				vertex_positions.length / vertex_positions_stride,
				vertex_positions_stride * 4,
				max_vertices,
				max_triangles,
				max_triangles,
				cone_weight,
				split_factor
			);
		},
		buildMeshletsSpatial: function (indices, vertex_positions, vertex_positions_stride, max_vertices, min_triangles, max_triangles, fill_weight) {
			assert(indices.length % 3 == 0);
			assert(vertex_positions instanceof Float32Array);
			assert(vertex_positions.length % vertex_positions_stride == 0);
			assert(vertex_positions_stride >= 3);
			assert(max_vertices > 0 && max_vertices <= 256);
			assert(min_triangles >= 1 && max_triangles <= 512);
			assert(min_triangles <= max_triangles);

			fill_weight = fill_weight || 0.0;

			var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);

			return buildMeshlets(
				instance.exports.meshopt_buildMeshletsSpatial,
				indices32,
				vertex_positions,
				vertex_positions.length / vertex_positions_stride,
				vertex_positions_stride * 4,
				max_vertices,
				max_triangles,
				max_triangles,
				fill_weight
			);
		},
		extractMeshlet: function (buffers, index) {
			assert(index >= 0 && index < buffers.meshletCount);

			return extractMeshlet(buffers, index);
		},
		computeClusterBounds: function (indices, vertex_positions, vertex_positions_stride) {
			assert(indices.length % 3 == 0);
			assert(indices.length / 3 <= 512);
			assert(vertex_positions instanceof Float32Array);
			assert(vertex_positions.length % vertex_positions_stride == 0);
			assert(vertex_positions_stride >= 3);

			var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);

			return computeClusterBounds(indices32, vertex_positions, vertex_positions.length / vertex_positions_stride, vertex_positions_stride * 4);
		},
		computeMeshletBounds: function (buffers, vertex_positions, vertex_positions_stride) {
			assert(buffers.meshletCount != 0);
			assert(vertex_positions instanceof Float32Array);
			assert(vertex_positions.length % vertex_positions_stride == 0);
			assert(vertex_positions_stride >= 3);

			return computeMeshletBounds(buffers, vertex_positions, vertex_positions.length / vertex_positions_stride, vertex_positions_stride * 4);
		},
		computeSphereBounds: function (positions, positions_stride, radii, radii_stride) {
			assert(positions instanceof Float32Array);
			assert(positions.length % positions_stride == 0);
			assert(positions_stride >= 3);
			assert(!radii || radii instanceof Float32Array);
			assert(!radii || radii.length % radii_stride == 0);
			assert(!radii || radii_stride >= 1);
			assert(!radii || positions.length / positions_stride == radii.length / radii_stride);

			radii_stride = radii_stride || 0;

			return computeSphereBounds(positions, positions.length / positions_stride, positions_stride * 4, radii, radii_stride * 4);
		},
	};
})();

export { MeshoptClusterizer };
