function search(){
	try {
		  $.ajax({
          type: 'GET',
          dataType: 'json',
          url: 'https://itunes.apple.com/search?term='+formatSearch($('#searchTerm').val())+'&limit=200'+"&callback=?",       
          success: function(items) 
          {
			var songs = "";
			$.each(items.results, function(index, song){
			  var info = '<div class="col-sm-3"><center>';
        info += '<img class="image" src="' + song.artworkUrl100 + '">';
			  info += '<h5>Song Name:  ' + song.trackName + '<h5>';
			  info += '<h6>Artist:  ' + song.artistName + '</h6>';
			  info += '<p>Album:  ' + song.collectionName + '<br>Genre:  ' + song.primaryGenreName + '<br>Collection Price:  ' + song.collectionPrice + '</p>';
			  info += '</center></div>';
			  songs += info;
            });

            $('#results').html(songs);
			
			if(items.resultCount == 0)
            {
              var nothingFound = "Sorry, no results matched your search for " + $('#searchTerm').val();
              $('#results').html('<div class="col-sm-12"><center><h4>' + nothingFound + '</h4></center></div>');
            }

          }
        });
	}
	catch (e){
		return "Sorry, there is a issue with your search ...Refresh the page and try again.";
	}
	

};

function formatSearch(search){
return search.trim().replace(/ /g, "+");
	
};

// jPages pagination
$(function() {
$("div.holder").jPages({
		containerID: "results"
	});
 });
