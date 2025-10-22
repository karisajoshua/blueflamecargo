const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TrackingRequest {
  trackingNumber: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { trackingNumber }: TrackingRequest = await req.json();

    if (!trackingNumber) {
      return new Response(
        JSON.stringify({ error: 'Tracking number is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log(`Tracking shipment: ${trackingNumber}`);

    // Get tracking API key from environment
    const apiKey = Deno.env.get('TRACKING_API_KEY');
    
    if (!apiKey) {
      console.warn('TRACKING_API_KEY not configured - returning mock data');
      
      // Return mock tracking data when API key is not configured
      const mockData = {
        trackingNumber,
        status: 'delivered',
        events: [
          {
            timestamp: new Date(Date.now() - 86400000).toISOString(),
            status: 'delivered',
            location: 'Nairobi, Kenya',
            description: 'Package has been delivered',
          },
          {
            timestamp: new Date(Date.now() - 172800000).toISOString(),
            status: 'out_for_delivery',
            location: 'Nairobi, Kenya',
            description: 'Out for delivery',
          },
          {
            timestamp: new Date(Date.now() - 259200000).toISOString(),
            status: 'customs_cleared',
            location: 'Nairobi, Kenya',
            description: 'Cleared customs',
          },
          {
            timestamp: new Date(Date.now() - 432000000).toISOString(),
            status: 'in_transit',
            location: 'Dubai, UAE',
            description: 'Departed from origin',
          },
        ],
        carrier: 'BlueFlame Cargo Masters',
        estimatedDelivery: new Date(Date.now() + 86400000).toISOString(),
      };

      return new Response(
        JSON.stringify(mockData),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Example: ShipEngine API integration (uncomment when API key is added)
    /*
    const response = await fetch(`https://api.shipengine.com/v1/tracking?carrier_code=&tracking_number=${encodeURIComponent(trackingNumber)}`, {
      method: 'GET',
      headers: {
        'API-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Tracking API error: ${response.status}`);
    }

    const trackingData = await response.json();
    
    return new Response(
      JSON.stringify(trackingData),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
    */

    // For now, return mock data
    const mockData = {
      trackingNumber,
      status: 'in_transit',
      events: [
        {
          timestamp: new Date(Date.now() - 86400000).toISOString(),
          status: 'in_transit',
          location: 'Dubai, UAE',
          description: 'Package in transit',
        },
        {
          timestamp: new Date(Date.now() - 172800000).toISOString(),
          status: 'picked_up',
          location: 'Shanghai, China',
          description: 'Package picked up',
        },
      ],
      carrier: 'BlueFlame Cargo Masters',
      estimatedDelivery: new Date(Date.now() + 259200000).toISOString(),
    };

    return new Response(
      JSON.stringify(mockData),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in track-shipment function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Internal server error' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
