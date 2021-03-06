if( mapper.getServiceName( request ) == "sales" )
{
	var ipAddress = mapper.getBaggageItem( "forwarded-for" );
	mapper.fine( 'Got IP Address as ' + ipAddress );
	if( ipAddress )
	{
		var lastDigit = ipAddress.substring( ipAddress.length - 1 );
		mapper.fine( 'Got last digit as ' + lastDigit );
		if( lastDigit % 2 == 0 )
		{
			//Even IP address, reroute for A/B testing:
			hostAddress = mapper.getRoutedAddress( request, "http://sales2:8080" );
		}
	}
}
