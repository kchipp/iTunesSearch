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
			  var info = '<div class="col-sm-4"><center>';
			  info += '<h5>' + song.trackName + '<h5>';
			  info += '<h6>' + song.artistName + '</h6>';
			  info += '<p>' + song.collectionName + '</p>';
              info += '<p>' + song.primaryGenreName + '</p>';
              info += '<p>' + song.collectionPrice + '</p>';
              info += '<p>' + song.trackPrice + '<br><br></p>';
			  info += '</center></div>';
			  songs += info;
            });

            $('#results').html(songs);
          }
        });
	}
	catch (e){
		return "Sorry, no results matched your search ...Refresh the page and try again.";
	}
	

};

function formatSearch(search){
return search.trim().replace(/ /g, "+");
	
};

