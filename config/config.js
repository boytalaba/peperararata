const config = {
    app_name: 'Proof of Pepes Rarity',
    app_description: 'Proof of pepes Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x79d9B3Cfa2172ec3566e35ABc09CB32d1593b5af',
    collection_name: 'Proof of pepes',
    collection_description: 'POMPEPEs (Proof of Pepes) is a Collection of 2 222 unique NFTs with rich traits and rarity randomly generate on Proof of Memes Blockchain',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: '',
    item_path_name: 'PEPES',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;