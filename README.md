

__jQuery Depth Plugin__

Simple jQuery utility plugin for working with z-indexed elements. Provides three functions.


	// returns the z-index of the element
	// shorthand for $(element).css('z-index');
	// returns 0 in the case that the element does not have a z-index assigned
	// this is designed to pair well with $().width() and $().height()
    $(element).depth(); // 1


    // returns an Array of the z-index's of all the elements siblings
    // since z-index is only relative to an element's siblings
    // this should help avoid styles like 
    // .onTopOfTheOverlay { z-index: 10010; }
    // returns 0 for elements with no z-index assigned, 
    // and an empty array for unfound objects
    $(element).depths(); // [0,0,1,2,3,10000,3]


    // returns the next highest depth above any of the siblings
    $(element).nextDepth() // 10001