/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const DevNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_NFTname, _uniqueid, _homelocality, _favcolour) {
    const Metainfo = {
        name : _NFTname,
        uniqueid : _uniqueid,
        location : _homelocality,
        colour : _favcolour
     }
     DevNFTs.push(Metainfo)
     console.log("Congrats you Created " + _NFTname);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < DevNFTs.length ; i++){
        console.log("\nNFT unique Number "+ (i+1))
        console.log("Name : " + DevNFTs[i].name)
        console.log("UID : " + DevNFTs[i].uniqueid)
        console.log("Location : " + DevNFTs[i].location)
        console.log("Colour : " + DevNFTs[i].colour)
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" +DevNFTs.length)

}

// call your functions below this line
mintNFT("Rasberry", 7043, "Chandigarh", "Blue");
mintNFT("Pie", 7048, "Mirzapur", "Black");
mintNFT("Mango", 7045, "Varanasi", "Orange");
mintNFT("Super", 7046, "Delhi", "Voilet");
mintNFT("Mario", 7047, "Bhopal", "Red");
mintNFT("Devesh", 7049, "Kanpur", "Pink");
listNFTs ()
getTotalSupply()

