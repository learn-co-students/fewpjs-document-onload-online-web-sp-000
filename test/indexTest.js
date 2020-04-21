describe( "index.js", () => {
  it( 'should change the text on the page when DOM content has loaded', function () {
    expect( document.querySelector( 'p' )
        .textContent )
      .to.equal( "SCREEEEE" );

    let event = document.createEvent( 'Event' );
    event.initEvent( 'DOMContentLoaded', true, true );
    window.document.dispatchEvent( event );

    expect( document.querySelector( 'p' )
        .textContent )
      .to.equal( "Meh!" );
  } )

} )
