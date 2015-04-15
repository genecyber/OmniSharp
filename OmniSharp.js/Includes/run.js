var builder
var jsilConfig = {
        printStackTrace: false,
        manifests: [
          "OmniSharp.dll"
        ],
      }
function runMain () {
		builder = new OmniSharp.tx.RawTxBuilder;
		console.log( 'Loaded' );
}


	
 