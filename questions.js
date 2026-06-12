/* =====================================================================
   Texas CDL Practice — Question Bank
   Each test is built by sampling this pool (exam-size, shuffled) so every
   numbered test is stable but distinct. Fields per question:
     q           - the question
     options     - 4 answer choices
     answer      - index (0-3) of the correct choice
     explanation - why the correct answer is right
     handbook    - a representative line from the TX CDL Handbook
     hbref       - handbook section reference
   ===================================================================== */
window.CDL_DATA = {
  categories: [
    {
      id:"special", name:"TX Special Requirements", hbSection:"§14",
      blurb:"Texas-only rules: vehicle size, lighting, flags, brakes, towing and marking. You must pass this first.",
      numTests:20, examSize:25, passNeed:20, questions:[]
    },
    {
      id:"general", name:"General Knowledge", hbSection:"§1–3",
      blurb:"The core test every CDL applicant takes: safe driving, speed and space management, hazards, cargo and emergencies.",
      numTests:30, examSize:50, passNeed:40, questions:[]
    },
    {
      id:"airbrakes", name:"Air Brakes", hbSection:"§5",
      blurb:"How air brake systems work, inspecting them, and using them safely. Needed to remove the air-brake restriction.",
      numTests:20, examSize:25, passNeed:20, questions:[]
    },
    {
      id:"combination", name:"Combination Vehicles", hbSection:"§6",
      blurb:"Tractor-trailers and other combinations: coupling, off-tracking, trailer brakes and rollover prevention.",
      numTests:20, examSize:20, passNeed:16, questions:[]
    }
  ]
};
function CAT(id){ return window.CDL_DATA.categories.find(c=>c.id===id); }

/* ============================ GENERAL KNOWLEDGE ============================ */
CAT("general").questions = [
  {
    q:"At 55 mph in good conditions, the total stopping distance for a heavy vehicle (perception + reaction + braking) is about:",
    options:["About 140 feet","About 220 feet","About 420 feet (well over a football field)","About 60 feet"],
    answer:2,
    explanation:"Per the Texas handbook, at 55 mph perception distance is about 142 ft (1.5 sec), reaction distance about 61 ft, and braking distance about 216 ft — roughly 419 ft total, much farther than a 300-ft football field.",
    handbook:"At 55 mph it takes about 6 seconds to stop and the vehicle travels about 419 feet: perception distance about 142 feet, reaction distance about 61 feet, and braking distance about 216 feet.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"Stopping distance increases dramatically with speed. If you double your speed from 20 to 40 mph, your braking distance increases by about how much?",
    options:["It stays about the same","It roughly doubles","It is about 4 times longer","It is about 10 times longer"],
    answer:2,
    explanation:"Braking distance grows with the square of speed. Doubling speed multiplies braking distance by about four, and the impact in a crash is also about four times as great.",
    handbook:"Whenever you double your speed it takes about four times as much distance to stop, and your vehicle has four times the destructive power if it crashes.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"On a dry road in good conditions, what is the minimum following distance rule for a heavy vehicle?",
    options:["Two seconds regardless of length","One second for each 10 feet of vehicle length, plus 1 second over 40 mph","Three car lengths for every 10 mph","A fixed 100 feet at any speed"],
    answer:1,
    explanation:"Allow one second for each 10 feet of vehicle length at speeds below 40 mph, then add one more second when above 40 mph. A 60-ft rig at highway speed needs about 7 seconds.",
    handbook:"At speeds below 40 mph allow one second for each 10 feet of vehicle length; at greater speeds add one second for safety.",
    hbref:"§2.7 Managing Space"
  },
  {
    q:"You should look far enough ahead while driving so that you are scanning the road roughly how far in front of the vehicle?",
    options:["Just past the hood","4 to 6 seconds ahead","12 to 15 seconds ahead","At least 30 seconds ahead"],
    answer:2,
    explanation:"Good drivers look 12 to 15 seconds ahead — about a quarter mile at highway speed and a block or more in the city — so they can respond smoothly instead of reacting late.",
    handbook:"Look 12 to 15 seconds ahead of your vehicle, which at lower speeds is about one block and at highway speeds is about a quarter of a mile.",
    hbref:"§2.4 Seeing"
  },
  {
    q:"What does 'hydroplaning' require to occur, and how should you respond if it happens?",
    options:["Only heavy rain; brake hard immediately","Some water and speed; release the accelerator and do not brake hard","Snow only; downshift sharply","Oil on the road; steer hard to one side"],
    answer:1,
    explanation:"Hydroplaning can happen with just a film of water, especially above about 30 mph. If it occurs, release the accelerator and push in the clutch to let the wheels slow and regain traction; do not brake hard.",
    handbook:"In some cases hydroplaning can occur at speeds as low as 30 mph if there is a lot of water. If your vehicle hydroplanes, release the accelerator and push in the clutch to slow down.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"After beginning a trip, within how many miles should you make the first stop to re-check your cargo and its securement?",
    options:["Within the first 10 miles","Within the first 50 miles","Within the first 100 miles","Only at the next rest stop"],
    answer:1,
    explanation:"Inspect your cargo and securing devices within the first 50 miles, then re-check after every 3 hours or 150 miles (or whenever you stop), because loads can shift and tie-downs loosen early.",
    handbook:"Inspect within the first 50 miles, then re-check after every 3 hours or 150 miles, whichever comes first; cargo can shift and securing devices can loosen.",
    hbref:"§3.1 Inspecting Cargo"
  },
  {
    q:"How many tie-downs are required at minimum for cargo, and what is the spacing rule?",
    options:["One tie-down total for any load","At least one tie-down for each 10 feet of cargo, and a minimum of two","One tie-down for each 25 feet, minimum one","Tie-downs are only required for loads over 20 feet"],
    answer:1,
    explanation:"You need at least one tie-down for each 10 feet of cargo, and there must be a minimum of two tie-downs no matter how short the cargo is.",
    handbook:"There should be at least one tie-down for each 10 feet of cargo. Make sure you have enough tie-downs; even a very small piece of cargo needs at least two.",
    hbref:"§3.2 Securing Cargo"
  },
  {
    q:"Which statement about a vehicle's center of gravity and rollover risk is correct?",
    options:["A high center of gravity makes a vehicle more stable in curves","A high center of gravity raises rollover risk, so heavy cargo should be loaded low","Center of gravity has no effect on rollover","Loading all weight on top improves braking"],
    answer:1,
    explanation:"A high center of gravity means the vehicle is more top-heavy and can tip over more easily on curves or quick lane changes. Keep the heaviest cargo down low and distribute it evenly.",
    handbook:"A high center of gravity means you are more likely to tip over. Distribute the weight as low as possible and keep the load balanced.",
    hbref:"§3.1 Weight and Balance"
  },
  {
    q:"You are driving at night. To avoid being blinded by oncoming headlights, you should:",
    options:["Stare directly at the oncoming lights","Look to the right edge of your lane or at lane markings","Turn on your high beams to match them","Close one eye until they pass"],
    answer:1,
    explanation:"Do not look directly at oncoming headlights. Look toward the right side of the road, following the lane line or edge, until the vehicle passes.",
    handbook:"Do not look directly at oncoming headlights. Look slightly to the right at the right edge or markings of your lane.",
    hbref:"§2.10 Night Driving"
  },
  {
    q:"When the roads are slippery, you should do all of the following EXCEPT:",
    options:["Reduce your speed and increase following distance","Make turns as gently as possible","Brake hard and suddenly to test traction","Watch for shaded areas and bridges that freeze first"],
    answer:2,
    explanation:"On slippery roads you should slow down, keep extra space, and steer/brake gently. Braking hard can cause a skid; bridges and shaded spots freeze before the open road.",
    handbook:"Drivers should adjust their driving to slippery conditions by reducing speed, increasing following distance, and avoiding sudden or hard braking.",
    hbref:"§2.12 Driving in Winter"
  },
  {
    q:"A vehicle equipped with ABS gives you what main advantage when you brake hard in an emergency?",
    options:["It stops the vehicle in a much shorter distance every time","It lets you keep steering control by preventing wheel lockup","It removes the need to keep a safe following distance","It automatically steers around obstacles"],
    answer:1,
    explanation:"ABS keeps the wheels from locking so you can steer while braking hard. It does not necessarily shorten stopping distance; its benefit is steering control and stability.",
    handbook:"ABS helps you avoid wheel lockup and keep control of your vehicle when you brake hard. It does not necessarily shorten your stopping distance.",
    hbref:"§2.17 Antilock Braking Systems"
  },
  {
    q:"You are starting down a long, steep downgrade. The safest braking method is to:",
    options:["Hold the brakes down firmly the entire way","Select a low gear before the descent and use light, steady or snub braking","Coast in neutral to save fuel","Apply the brakes only at the bottom of the hill"],
    answer:1,
    explanation:"Choose a safe low gear before starting down so the engine helps control speed, then use light steady pressure or the snub-braking method. Riding the brakes the whole way causes brake fade.",
    handbook:"The use of brakes on a long and steep downgrade is only a supplement to the braking effect of the engine. Once the vehicle is in the proper low gear, use the braking effect of the engine as the principal way of controlling speed.",
    hbref:"§2.15 Mountain Driving"
  },
  {
    q:"What is 'brake fade' and what most commonly causes it?",
    options:["Brakes freezing in cold weather","Loss of braking power from overheating after long or excessive brake use","Air leaking from the tires","Brake fluid thickening at high altitude"],
    answer:1,
    explanation:"Brake fade is a loss of stopping power caused by excessive heat from using the brakes too much, such as riding them down a long grade. Using engine braking and proper gear prevents it.",
    handbook:"Brakes can fade or fail from excessive heat caused by using them too much instead of using the engine braking effect.",
    hbref:"§2.15 Mountain Driving"
  },
  {
    q:"You are approaching a railroad crossing with a transit bus or a placarded hazmat load behind you... but you are in a regular truck. The general rule for stopping at railroad crossings is:",
    options:["All commercial vehicles must always stop at every crossing","Stop only if you see a train","Slow down, check, and be prepared to stop; certain vehicles (buses, placarded hazmat) must always stop","Speed up to clear the tracks quickly"],
    answer:2,
    explanation:"Most trucks must slow, look, and listen, stopping if a train is coming. Vehicles such as buses carrying passengers and placarded hazardous-materials carriers must stop at crossings even when no train is visible.",
    handbook:"Buses carrying passengers and vehicles carrying placarded amounts of hazardous materials must stop at railroad crossings; other drivers must slow down and be ready to stop.",
    hbref:"§2.14 Railroad Crossings"
  },
  {
    q:"Never permit a stopped vehicle to be on the tracks. Before crossing a railroad track, you should be sure you have enough room to:",
    options:["Stop on the tracks if needed","Completely clear the tracks without stopping","Change a tire if you stall","Make a U-turn on the crossing"],
    answer:1,
    explanation:"Make sure your vehicle can fully clear the crossing before you start across. Trucks can be hung up on raised crossings, and you should never start across unless you can get all the way over.",
    handbook:"Never permit traffic conditions to trap you in a position where you have to stop on the tracks. Be sure you can get all the way across before you start.",
    hbref:"§2.14 Railroad Crossings"
  },
  {
    q:"A front tire blows out suddenly at highway speed. What is the correct first action?",
    options:["Brake hard immediately and steer to the shoulder","Hold the steering wheel firmly, stay off the brake, and let the vehicle slow gradually","Accelerate to regain control","Shift to neutral and coast off the road"],
    answer:1,
    explanation:"On a blowout, grip the wheel firmly to keep straight, stay off the brake, and let the vehicle slow before easing off the road. Hard braking can cause loss of control.",
    handbook:"If a tire blows out, hold the steering wheel firmly, stay off the brake, and keep the vehicle going straight while you slow down before pulling off the road.",
    hbref:"§2.16 Driving Emergencies"
  },
  {
    q:"Which type of fire extinguisher rating is suitable for an electrical or burning-liquid (fuel) fire?",
    options:["Class A only","Class B:C","Water type","No extinguisher works on electrical fires"],
    answer:1,
    explanation:"A B:C rated extinguisher works on burning liquids (B) and electrical fires (C). Never use water on an electrical or gasoline fire — it can spread the flames or cause shock.",
    handbook:"A B:C type fire extinguisher is designed to work on electrical fires and burning liquids. Water can be used on burning wood, paper, or cloth, but not on electrical or gasoline fires.",
    hbref:"§2.20 Fires"
  },
  {
    q:"You arrive first at an accident scene. To help prevent another crash, the FIRST thing you should usually do is:",
    options:["Move all injured people immediately","Protect the area with warning devices and your flashers","Leave the scene to find a phone","Push the wrecked vehicles off the road with your truck"],
    answer:1,
    explanation:"Keep another collision from happening: turn on flashers, set out reflective triangles, and warn other drivers. Generally do not move the injured unless there is a fire or other danger.",
    handbook:"The first thing to do at an accident scene is to keep another accident from happening by parking off the road, turning on flashers, and setting out warning devices.",
    hbref:"§2.19 Accident Procedures"
  },
  {
    q:"Under federal rules, a driver is legally intoxicated (and out of service) at a blood alcohol concentration (BAC) of:",
    options:["0.10% or higher","0.08% or higher","0.04% or higher","0.02% or higher"],
    answer:2,
    explanation:"For commercial drivers the limit is stricter: a BAC of 0.04% or more while operating a CMV is a violation. Drivers are also placed out of service for 24 hours for any detectable alcohol.",
    handbook:"A driver having any detectable amount of alcohol under 0.04 may be placed out of service for 24 hours; 0.04 or more is considered driving under the influence for CMV drivers.",
    hbref:"§2.21 Alcohol and Other Drugs"
  },
  {
    q:"What only truly reverses the effects of alcohol and makes a drinker sober?",
    options:["Black coffee","A cold shower","Fresh air and exercise","Time"],
    answer:3,
    explanation:"Only time removes alcohol from the body. Coffee, cold air, and exercise do not speed up sobering — they may make a person more alert but still impaired.",
    handbook:"The only thing that can make a person sober is time. Coffee and a little fresh air will not help; the body gets rid of alcohol at a fixed rate.",
    hbref:"§2.21 Alcohol and Other Drugs"
  }
];

CAT("general").questions.push(
  {
    q:"Which is the LEAST acceptable way to find out whether your vehicle is overloaded or has a shifted load on a long trip?",
    options:["Re-inspect cargo within the first 50 miles","Use a public scale to weigh axles","Assume it is fine because it looked balanced when you left","Re-check securement every 150 miles or 3 hours"],
    answer:2,
    explanation:"You cannot assume the load is fine just because it looked right at the start; loads settle and shift. Inspect early (within 50 miles), re-check periodically, and weigh when in doubt.",
    handbook:"Re-check the cargo and securing devices as often as necessary during a trip to keep the load secure; do not assume a load that looked secure will stay that way.",
    hbref:"§3.1 Inspecting Cargo"
  },
  {
    q:"Minimum tread depth for the steering (front) tires of a commercial vehicle is:",
    options:["2/32 inch","4/32 inch","6/32 inch","Any visible tread is acceptable"],
    answer:1,
    explanation:"Front (steer) tires must have at least 4/32 inch tread depth in every major groove. Other tires need at least 2/32 inch. Worn steer tires are especially dangerous.",
    handbook:"Steering axle tires must have at least 4/32 inch tread depth in every major groove; other tires must have at least 2/32 inch.",
    hbref:"§2.1 Vehicle Inspection"
  },
  {
    q:"How much play in the steering wheel should make you suspect a problem?",
    options:["Any movement at all","More than about 10 degrees (about 2 inches on a 20-inch wheel)","More than 45 degrees","Steering play is never a concern"],
    answer:1,
    explanation:"If the steering wheel can be turned more than about 10 degrees (roughly 2 inches on a 20-inch wheel) before the wheels move, steering may be loose and hard to control.",
    handbook:"If the steering wheel has more than 10 degrees of play (about 2 inches on a 20-inch wheel), it may be hard to steer and should be checked.",
    hbref:"§2.1 Vehicle Inspection"
  },
  {
    q:"Which emergency equipment are you required to carry on a commercial vehicle?",
    options:["A first-aid kit and flares only","A fire extinguisher, spare electrical fuses (unless equipped with circuit breakers), and warning devices (3 reflective triangles)","Only a fire extinguisher","A tow chain and jumper cables"],
    answer:1,
    explanation:"Required equipment includes a properly charged and rated fire extinguisher, spare electrical fuses (unless the vehicle uses circuit breakers), and warning devices such as three reflective triangles.",
    handbook:"Make sure the vehicle has a fire extinguisher that is charged, spare electrical fuses (unless equipped with circuit breakers), and the proper number of warning devices such as three reflective triangles.",
    hbref:"§2.1 Vehicle Inspection"
  },
  {
    q:"You must stop on a one-way or divided highway. How far back should the warning triangles be placed?",
    options:["One triangle 10 ft, one 50 ft, one 100 ft to the rear","Triangles at 10 ft, 100 ft, and 200 ft toward approaching traffic","All three triangles directly behind the bumper","Triangles are not needed on a divided highway"],
    answer:1,
    explanation:"On a one-way or divided road, place warning devices 10 feet, 100 feet, and 200 feet toward the approaching traffic. On a two-lane road, place them 10 ft to the front and rear and 100 ft to the rear.",
    handbook:"On a one-way or divided highway, place warning devices 10 feet, 100 feet, and 200 feet toward the approaching traffic.",
    hbref:"§2.1 / §2.19 Warning Devices"
  },
  {
    q:"An empty truck generally needs a LONGER stopping distance than a loaded one because:",
    options:["Empty trucks always go faster","With less weight, the tires have less traction and can lock up or skid sooner","Empty brakes are weaker by design","This is false — empty trucks always stop quicker"],
    answer:1,
    explanation:"Brakes and tires are designed to work best when the vehicle is loaded. Empty, there is less traction, so wheels can lock up and the stopping distance can actually be longer.",
    handbook:"An empty truck requires a greater stopping distance because an empty vehicle has less traction; the wheels can lock up and skid, giving poor braking.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"On a wet road, you should reduce your speed by about how much compared to a dry road?",
    options:["You do not need to slow down","About one-third","About one-half","About three-quarters"],
    answer:1,
    explanation:"Reduce speed by about a third on wet roads (for example from 55 to about 35). On packed snow reduce by half or more, and on ice slow to a crawl.",
    handbook:"On a wet road reduce your speed by about one-third; on packed snow reduce speed by a half or more; and on ice reduce speed to a crawl.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"When backing a heavy vehicle, the safest practice is to:",
    options:["Back toward the right (blind) side so you can use your mirror","Back toward the driver's side and use a helper whenever possible","Back quickly to spend less time blocking traffic","Rely only on your mirrors and never get out"],
    answer:1,
    explanation:"Back to the driver's (left) side so you can see, go slowly, and use a helper who stays in view. Get Out And Look (GOAL) before and during backing.",
    handbook:"Whenever possible, back toward the driver's side so you can see better, and use a helper. Always get out and walk around the vehicle before backing.",
    hbref:"§2.2 Basic Control of Your Vehicle"
  },
  {
    q:"Why should you avoid making a wide swing to the LEFT before turning right at an intersection?",
    options:["It wastes fuel","Another driver may try to pass on your right and be caught between your vehicle and the curb","It is illegal in all states","It has no real downside"],
    answer:1,
    explanation:"If you swing left first, a driver behind may think you are changing lanes and try to squeeze past on your right. Turn wide as you complete the turn, keeping the rear close to the curb.",
    handbook:"Do not swing wide to the left as you start the turn. A driver behind may think you are turning left and try to pass you on the right.",
    hbref:"§2.7 Managing Space — Turning"
  },
  {
    q:"You are being tailgated by another vehicle. The best response is to:",
    options:["Speed up to get away from them","Increase the space in front of you and avoid sudden moves","Flash your brake lights to warn them","Move to the left lane and slow down"],
    answer:1,
    explanation:"Open up room ahead so you can stop or slow gradually without forcing the tailgater to brake hard. Avoid quick changes, and do not speed up — they will likely just keep tailgating.",
    handbook:"If you are being tailgated, increase the distance ahead of you so you can slow gradually, and avoid quick changes. Do not speed up, since high speeds are more dangerous.",
    hbref:"§2.7 Managing Space"
  },
  {
    q:"Posted speed limits for curves are set for cars in good conditions. For a loaded truck, you should:",
    options:["Take the curve at the posted speed","Enter well below the posted curve speed and avoid braking in the curve","Brake hard while in the curve","Accelerate through the curve to stay stable"],
    answer:1,
    explanation:"A top-heavy truck can roll over at the posted curve speed meant for cars. Slow down before the curve, then keep a light steady throttle through it.",
    handbook:"Take curves well below the posted speed limit. Slow to a safe speed before entering a curve; braking in a curve can cause a skid or rollover.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"What is the correct response if your drive wheels begin to skid (rear of the vehicle slides) on a slippery road?",
    options:["Brake harder to dig in","Stop braking/accelerating, push in the clutch, and steer in the direction you want to go","Steer hard the opposite way","Lock the brakes until you stop"],
    answer:1,
    explanation:"For a drive-wheel (rear) skid, take your foot off the accelerator (and push in the clutch), then steer in the direction you want the front to go and countersteer as it recovers.",
    handbook:"To correct a drive-wheel skid, stop accelerating and push in the clutch, then steer quickly in the direction you want to go and be ready to countersteer.",
    hbref:"§2.18 Skid Control and Recovery"
  },
  {
    q:"Hours-of-service: a property-carrying driver may drive a maximum of how many hours after coming on duty?",
    options:["10 hours after 8 hours off","11 hours after 10 consecutive hours off duty","14 hours straight","No federal driving-time limit"],
    answer:1,
    explanation:"A property-carrying CMV driver may drive up to 11 hours after 10 consecutive hours off duty, and may not drive beyond the 14th hour after coming on duty.",
    handbook:"Drivers may drive a maximum of 11 hours after 10 consecutive hours off duty, and may not drive after the 14th hour after coming on duty.",
    hbref:"§2.22 Staying Alert and Fit to Drive"
  },
  {
    q:"Which is a sign of driver fatigue that means you should stop and rest?",
    options:["Feeling fully alert and focused","Drifting, missing exits, heavy eyelids, or not remembering the last few miles","Driving exactly at the speed limit","Checking mirrors frequently"],
    answer:1,
    explanation:"Wandering in the lane, drowsy eyes, frequent yawning, and not recalling the last stretch of road are danger signs of fatigue. The only real cure is sleep — pull over safely.",
    handbook:"If your eyes close or go out of focus, you cannot stop yawning, or you cannot remember the last few miles, you are too tired to drive safely and must stop.",
    hbref:"§2.22 Staying Alert and Fit to Drive"
  },
  {
    q:"When the hydraulic brakes on a vehicle fail (pedal goes to the floor), what should you do FIRST?",
    options:["Pump the brake pedal to try to build pressure","Shut off the engine immediately","Pull the trailer air-supply knob","Steer into oncoming traffic to slow"],
    answer:0,
    explanation:"Pump the brake pedal — this can sometimes generate enough hydraulic pressure to slow the vehicle. Then downshift, use the parking brake (gently), and look for an escape route or ramp.",
    handbook:"If your brakes fail, pumping the brake pedal sometimes generates enough hydraulic pressure to stop the vehicle; also downshift and use the parking brake.",
    hbref:"§2.16 Driving Emergencies"
  },
  {
    q:"Convex (curved) 'fender' mirrors show you:",
    options:["A larger area but make objects look smaller and farther away","A magnified close-up of one spot","Exactly the same view as flat mirrors","Only the area directly behind the cab"],
    answer:0,
    explanation:"Convex mirrors give a wider field of view, but objects appear smaller and farther away than they really are, so judge distances carefully.",
    handbook:"Convex mirrors show a wider area than flat mirrors, but objects appear smaller and farther away than they really are.",
    hbref:"§2.4 Seeing — Mirrors"
  },
  {
    q:"You should signal continuously while turning and:",
    options:["Cancel the signal before completing the turn","Not cancel it until the turn is finished, then make sure it is off","Only signal if other cars are present","Use hand signals instead of lights at night"],
    answer:1,
    explanation:"Keep signaling through the entire turn and do not cancel early. After completing the turn, make sure the signal is off, since many trucks lack self-canceling signals.",
    handbook:"Signal continuously and do not cancel the signal until you have completed the turn; then make sure your signal is turned off.",
    hbref:"§2.5 Communicating"
  },
  {
    q:"To communicate that you are slowing down when there is no obvious reason (such as preparing to turn off a high-speed road), you should:",
    options:["Do nothing; your speed will show it","Tap the brake pedal a few times to flash the brake lights early","Turn on your high beams","Sound the horn repeatedly"],
    answer:1,
    explanation:"Warn drivers behind by tapping the brakes to flash your lights early, or use the four-way flashers if you must slow a lot, so they are not surprised by your slowdown.",
    handbook:"If you are going to slow down well below the speed of traffic, tap your brake pedal a few times to warn drivers behind you with flashing brake lights.",
    hbref:"§2.5 Communicating"
  },
  {
    q:"Which best describes how to manage space OVERHEAD (clearance)?",
    options:["Assume posted clearance signs are always accurate","Watch for low bridges/wires; a loaded vehicle may be lower than when empty, so do not assume","Overhead space is never an issue for trucks","Let air out of the tires to lower the truck"],
    answer:1,
    explanation:"Do not assume posted heights are correct or that you will fit. Repaving can reduce clearance, and an empty van trailer rides higher than a loaded one. When unsure, go slow or find another route.",
    handbook:"Do not assume that the heights posted at bridges and overpasses are correct. The height of some vehicles may be more when empty than when loaded.",
    hbref:"§2.7 Managing Space — Overhead"
  },
  {
    q:"In dense fog, the best practice is to:",
    options:["Use high beams for maximum light","Use low beams and fog lights, slow down, and consider pulling off if it is too thick","Speed up to get through it faster","Follow closely behind another vehicle's taillights"],
    answer:1,
    explanation:"High beams reflect off fog and make seeing harder. Use low beams/fog lights, slow down, watch for stopped vehicles, and if visibility is too poor, pull completely off the road.",
    handbook:"In fog, use low beams and fog lights, slow down before entering it, and if the fog is too thick, pull completely off the road and turn on flashers.",
    hbref:"§2.11 Driving in Fog"
  },
  {
    q:"A 'hazard' on the road is best defined as:",
    options:["Only another vehicle that is speeding","Any road condition or road user that is a possible danger you should watch and plan for","Just bad weather","Anything that has already caused a crash"],
    answer:1,
    explanation:"A hazard is any road condition or other road user that could become an emergency — a parked car that might pull out, a child near the road, ice ahead. Spot hazards early so you have time to react.",
    handbook:"A hazard is any road condition or road user that is a possible danger. Seeing hazards lets you prepare and react before they become emergencies.",
    hbref:"§2.8 Seeing Hazards"
  }
);

CAT("general").questions.push(
  {
    q:"Total stopping distance is made up of three parts. Which list is in the correct order?",
    options:["Braking distance, reaction distance, perception distance","Perception distance, reaction distance, braking distance","Reaction distance, braking distance, perception distance","Perception distance, braking distance, reaction distance"],
    answer:1,
    explanation:"First you perceive the hazard (perception distance), then your body reacts and you move your foot to the brake (reaction distance), then the brakes act and the vehicle stops (braking distance).",
    handbook:"Total stopping distance equals perception distance plus reaction distance plus braking distance.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"The average driver's reaction distance at 55 mph adds about how much to total stopping distance?",
    options:["About 6 feet","About 32 feet","About 60 feet","About 200 feet"],
    answer:2,
    explanation:"Average reaction time is about 3/4 second, which at 55 mph covers roughly 60 feet before the brakes are even applied — about the length of a tractor-trailer.",
    handbook:"The average driver has a reaction time of about 3/4 second to 1 second, adding about 60 feet of reaction distance at 55 mph.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"Why is a routine pre-trip inspection legally and practically important?",
    options:["Only because police may ask for it","Because problems found before a trip can prevent breakdowns and crashes, and inspection is required by law","Because it improves fuel mileage","It is optional for experienced drivers"],
    answer:1,
    explanation:"Inspections find problems that could cause a breakdown or crash, protect you and others, and are required by federal and state law. A vehicle defect found in an inspection can save lives.",
    handbook:"A vehicle inspection is important because a vehicle defect found during an inspection could save you problems later; federal and state laws require drivers to inspect their vehicles.",
    hbref:"§2.1 Vehicle Inspection"
  },
  {
    q:"During the engine-compartment part of a pre-trip inspection, which of these are you checking?",
    options:["Tire pressure only","Engine oil level, coolant level, power-steering fluid, belts and hoses, and leaks","The fifth wheel grease","Only the battery voltage"],
    answer:1,
    explanation:"With the engine off, check oil and coolant levels, power-steering fluid, the condition of belts and hoses, the battery, and look for any leaks or cracks before starting.",
    handbook:"Check the engine compartment for proper fluid levels (oil, coolant, power steering), and inspect belts and hoses for wear and leaks.",
    hbref:"§2.1 Vehicle Inspection"
  },
  {
    q:"You see the road ahead looks wet, but spray from other vehicles' tires has stopped and the surface looks shiny in cold weather. This most likely means:",
    options:["The road is simply drying out","Black ice has formed and the road is very slippery","The pavement is freshly paved","Your windshield is dirty"],
    answer:1,
    explanation:"If it is cold and the road looks wet but tires are no longer throwing spray, the water has frozen — black ice. Slow down and avoid sudden steering or braking.",
    handbook:"Black ice is a thin layer that is clear enough to let you see the road underneath; if it is below freezing and the road looks wet, suspect black ice.",
    hbref:"§2.12 Driving in Winter"
  },
  {
    q:"With a vehicle that does NOT have ABS, the recommended emergency braking technique that keeps you in control is:",
    options:["Locking the wheels and skidding straight","Controlled or stab braking, keeping the wheels from staying locked","Holding the brakes fully to the floor","Pumping the steering wheel"],
    answer:1,
    explanation:"Without ABS, use controlled braking (light pressure without locking) or stab braking (brake fully, release when wheels lock, reapply) so you can still steer.",
    handbook:"Without ABS, you can use controlled braking or stab braking; stab braking means apply the brakes all the way, release when wheels lock up, then reapply.",
    hbref:"§2.16 Driving Emergencies"
  },
  {
    q:"An aggressive or angry driver is trying to provoke you. The safest response is to:",
    options:["Race them to prove a point","Stay out of their way, avoid eye contact, and do not challenge them","Brake-check them to teach a lesson","Block them from passing"],
    answer:1,
    explanation:"Do not engage. Give an aggressive driver room, avoid eye contact and gestures, and let them go. Report dangerous driving if you can do so safely.",
    handbook:"To avoid being a target of aggressive driving, do not make eye contact, do not respond to provocation, and stay out of the other driver's way.",
    hbref:"§2.9 Aggressive Drivers / Distracted Driving"
  },
  {
    q:"Using a hand-held phone or texting while driving a CMV is:",
    options:["Allowed below 30 mph","Prohibited; it greatly increases crash risk and can lead to penalties and disqualification","Fine if traffic is light","Only banned for new drivers"],
    answer:1,
    explanation:"Texting and using a hand-held phone are banned for CMV drivers. They take your eyes and attention off the road and can result in fines and driver disqualification.",
    handbook:"Drivers must not text or use a hand-held mobile phone while driving a CMV; doing so is a serious distraction and a violation that can lead to disqualification.",
    hbref:"§2.9 Distracted Driving"
  },
  {
    q:"When you must drive on a long upgrade and your engine begins to overheat, you should:",
    options:["Turn off the engine and coast","Reduce speed/gear and watch the temperature; if it keeps rising, stop safely to find the cause","Open the radiator cap to release pressure while hot","Pour cold water on the engine while running"],
    answer:1,
    explanation:"If the engine overheats, slow down or downshift to reduce load, and stop if it keeps climbing. Never remove a hot radiator cap — escaping steam and coolant can cause serious burns.",
    handbook:"If the temperature gauge shows overheating, you may have lost coolant or have another problem; stop and have it checked, and never remove the radiator cap while the engine is hot.",
    hbref:"§2.13 Driving in Very Hot Weather"
  },
  {
    q:"How often should you normally check your mirrors while driving?",
    options:["Only when changing lanes","Regularly, about every 5 to 8 seconds, and before any lane change or turn","Once every few minutes","Only at stops"],
    answer:1,
    explanation:"Scan your mirrors regularly to know where other vehicles are, and always check before changing lanes, turning, merging, or slowing. Remember mirrors have blind spots.",
    handbook:"Check your mirrors regularly to know where other vehicles are around you, and check them before changing lanes, turning, or merging.",
    hbref:"§2.4 Seeing — Mirrors"
  },
  {
    q:"You want to leave yourself an 'out' in traffic. The best lane position usually:",
    options:["Keeps you boxed in by other vehicles on all sides","Avoids driving directly alongside others so you have space to escape a hazard","Is right against the vehicle ahead","Is in another driver's blind spot"],
    answer:1,
    explanation:"Try not to travel in packs or alongside other vehicles. Open space beside you gives you somewhere to go if a hazard appears ahead.",
    handbook:"Try to keep space on at least one side; do not drive alongside other vehicles, because you could be trapped with no place to go.",
    hbref:"§2.7 Managing Space"
  },
  {
    q:"A runaway truck escape ramp should be used when:",
    options:["You want to take a short break","Your brakes have failed or faded on a steep downgrade and you cannot stop","You are slightly over the speed limit","Traffic is heavy on the main road"],
    answer:1,
    explanation:"Escape ramps use soft gravel or an upgrade to stop a runaway vehicle. If your brakes fail on a downgrade and you cannot regain control, use the ramp — it can save your life and others'.",
    handbook:"Escape ramps are made to stop runaway vehicles safely without injuring drivers; use them if your brakes fail on a downgrade.",
    hbref:"§2.15 Mountain Driving"
  },
  {
    q:"To merge smoothly onto a highway with a heavy vehicle, you should:",
    options:["Stop at the end of the ramp and wait for a huge gap","Match your speed to traffic and look for a gap, signaling early","Force your way in and let others adjust","Merge at half the speed of traffic"],
    answer:1,
    explanation:"Build up speed on the ramp to match traffic, signal early, find a gap, and merge smoothly. Stopping on the ramp makes it very hard to accelerate a heavy vehicle into fast traffic.",
    handbook:"When merging, make sure you have a large enough gap and accelerate to the speed of traffic; large vehicles need a much larger gap than cars.",
    hbref:"§2.7 Managing Space"
  },
  {
    q:"At dawn, dusk, or in rain, turning on your headlights mainly helps by:",
    options:["Improving your fuel economy","Making your vehicle easier for others to see, not just helping you see","Warming the engine","Charging the battery faster"],
    answer:1,
    explanation:"In low-light or rainy conditions, headlights make you far more visible to others. Use low beams (not just daytime running lights) so other drivers can pick you out.",
    handbook:"Turn your lights on at dawn, dusk, and in rain or snow so that other drivers can see you, even if you can see well enough yourself.",
    hbref:"§2.5 Communicating"
  },
  {
    q:"Smooth, steady operation of the accelerator matters because:",
    options:["Jerky acceleration saves fuel","Too much power to the drive wheels can make them spin or skid, especially when slippery","It has no effect on traction","It only matters in reverse"],
    answer:1,
    explanation:"Pressing the accelerator too hard can spin the drive wheels and cause a skid, particularly on wet or icy roads. Speed up smoothly and gradually.",
    handbook:"Speed up smoothly and gradually; if you use too much power, the drive wheels may spin and you could lose control.",
    hbref:"§2.2 Basic Control of Your Vehicle"
  },
  {
    q:"You should downshift to the proper gear:",
    options:["In the middle of a curve or hill","Before starting down a hill or before entering a curve","Only after the curve or hill","Never; modern trucks shift themselves on grades"],
    answer:1,
    explanation:"Select your gear before the hill or curve so the engine helps control speed and you keep both hands for steering. Shifting in the curve or downgrade can upset traction and control.",
    handbook:"Select the gear needed before you start down a hill or before entering a curve; this is the proper way to control your speed.",
    hbref:"§2.3 / §2.15 Shifting and Mountain Driving"
  },
  {
    q:"You realize you need to transport a load that requires hazardous-materials placards. You may legally do so only if you:",
    options:["Drive carefully and keep the bills handy","Have the proper hazmat endorsement and follow placarding/handling rules","Add extra mirrors","Travel only at night"],
    answer:1,
    explanation:"Carrying placarded amounts of hazmat requires a hazmat endorsement (with background check) and compliance with placarding, documentation, and handling rules. Placards warn others of the risk.",
    handbook:"You must have a hazardous materials endorsement to haul placarded amounts of hazardous materials; placards are used to warn others of hazardous contents.",
    hbref:"§2.23 Hazardous Materials Rules"
  },
  {
    q:"Why should you usually avoid using your horn except when needed for safety?",
    options:["It drains the battery","It can startle other drivers or pedestrians and provoke aggressive reactions","Horns are illegal on trucks","It is bad for the engine"],
    answer:1,
    explanation:"The horn is for warning others of danger. Unnecessary or angry honking can startle drivers or pedestrians and create a hazard, so use it sparingly.",
    handbook:"Use the horn only when needed; it can startle others and could be dangerous when used unnecessarily.",
    hbref:"§2.5 Communicating"
  },
  {
    q:"To keep from 'overdriving' your headlights at night, you should:",
    options:["Drive fast enough that the lights keep up","Drive slowly enough to stop within the distance you can see ahead","Use only your low beams at all speeds","Follow another vehicle closely to use their lights"],
    answer:1,
    explanation:"If you cannot stop within the area lit by your headlights, you are overdriving them. Slow down at night so your stopping distance stays within the range you can see.",
    handbook:"Do not overdrive your headlights; you should be able to stop within the distance you can see ahead, or you are going too fast.",
    hbref:"§2.10 Night Driving"
  },
  {
    q:"Front-wheel skids are most often caused by:",
    options:["Braking too gently","Driving too fast for conditions, worn front tires, or under-inflation, so the front tires lose grip","Too much weight on the rear axle","Using the engine brake"],
    answer:1,
    explanation:"In a front-wheel skid the vehicle goes straight even as you steer, usually because you are going too fast, the front tires are worn, or are under-inflated. The cure is to slow down and let the tires regain traction.",
    handbook:"Front-wheel skids are caused mostly by driving too fast for conditions; other causes include lack of tread on the front tires and cargo loaded so not enough weight is on the front axle.",
    hbref:"§2.18 Skid Control and Recovery"
  }
);

/* ============================ AIR BRAKES ============================ */
CAT("airbrakes").questions = [
  {
    q:"At what air pressure does the governor normally stop the compressor from pumping more air into the system (cut-out)?",
    options:["About 60 psi","About 100 psi","Usually around 125 psi","Above 175 psi"],
    answer:2,
    explanation:"The governor stops the compressor (cut-out) at the vehicle's set pressure — usually around 125 psi — and lets it resume (cut-in) when pressure drops. Always know your vehicle's specs.",
    handbook:"Build air pressure to governor cut-out, usually around 125 psi; know your vehicle's requirements.",
    hbref:"§5.1 Air Compressor Governor"
  },
  {
    q:"According to the Texas handbook, the low air pressure warning signal must come on before the air pressure in the tanks drops below:",
    options:["20 psi","40 psi","60 psi","100 psi"],
    answer:2,
    explanation:"The low-air warning (light and usually a buzzer) must activate before pressure falls below 60 psi. It tells you to stop and park safely while you still have braking air.",
    handbook:"The low air pressure warning signal must come on before the air pressure in the tanks falls below 60 psi.",
    hbref:"§5.1 Low Air Pressure Warning"
  },
  {
    q:"On a tractor-trailer, at what pressure do the spring (emergency/parking) brakes typically come fully on if air pressure keeps dropping?",
    options:["Between 5 and 10 psi","Between 20 and 45 psi","At exactly 60 psi","Only when the engine is off"],
    answer:1,
    explanation:"As air pressure falls, spring brakes begin to apply and come fully on somewhere between about 20 and 45 psi. That is why you must stop before losing too much air.",
    handbook:"On a tractor-trailer, the spring brakes will come on automatically when the air pressure drops to a range of about 20 to 45 psi.",
    hbref:"§5.1 Spring Brakes"
  },
  {
    q:"Why must air tanks be drained regularly (or have working automatic drains)?",
    options:["To increase air pressure","To remove water and compressor oil that collect and can damage the system or freeze","To clean the brake linings","To reset the governor"],
    answer:1,
    explanation:"Compressed air contains water and some oil that collect in the tanks. If not drained, water can freeze the brakes in cold weather and the contamination can harm the system.",
    handbook:"Compressed air usually has some water and compressor oil in it; the air tanks must be drained to remove this, or it can freeze in cold weather and cause brake failure.",
    hbref:"§5.1 Air Tank Drains"
  },
  {
    q:"Air brakes actually take MORE total stopping distance than hydraulic brakes mainly because of:",
    options:["Weaker braking force","Brake lag — the short delay (about half a second) for air to flow and the brakes to work","The driver reacting more slowly","Smaller brake drums"],
    answer:1,
    explanation:"Air brakes add 'brake lag' — about a half second for the air to travel and apply the brakes after you press the pedal — which adds roughly 32 feet at 55 mph on top of perception and reaction distance.",
    handbook:"With air brakes there is an added brake lag — the time required for the brakes to work after the brake pedal is pushed — of about 1/2 second.",
    hbref:"§5.4 Using Air Brakes"
  },
  {
    q:"For air-braked vehicles, total stopping distance is the sum of:",
    options:["Perception + reaction + braking distance","Perception + reaction + brake lag + braking distance","Reaction + braking distance only","Brake lag + braking distance only"],
    answer:1,
    explanation:"Because of brake lag, an air-brake vehicle's total stopping distance equals perception distance + reaction distance + brake lag distance + effective braking distance.",
    handbook:"With air brakes the total stopping distance is made up of four parts: perception distance, reaction distance, brake lag distance, and effective braking distance.",
    hbref:"§5.4 Using Air Brakes"
  },
  {
    q:"During a static air-leakage test on a combination vehicle (engine off, brakes released, fully charged), the air loss should not be more than:",
    options:["2 psi in one minute","3 psi in one minute","5 psi in one minute","10 psi in one minute"],
    answer:1,
    explanation:"With the brakes released, a combination vehicle should leak no more than 3 psi per minute (a single vehicle no more than 2 psi). Higher leakage means a problem to fix before driving.",
    handbook:"With the engine off and brakes released, the air pressure should not drop more than 2 psi in one minute for single vehicles and 3 psi in one minute for combination vehicles.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"With the brakes APPLIED (engine off, fully charged) on a combination vehicle, the air loss should not exceed:",
    options:["2 psi per minute","3 psi per minute","4 psi per minute","6 psi per minute"],
    answer:2,
    explanation:"Apply firm pressure (about 90 psi) and hold; a combination vehicle should lose no more than 4 psi per minute (a single vehicle no more than 3 psi). More than that signals a leak.",
    handbook:"With the brakes applied, air loss should not be more than 3 psi in one minute for single vehicles and 4 psi in one minute for combination vehicles.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"After a full charge, how do you test that the low-air warning device works?",
    options:["Pump the brakes until pressure is high","Turn the electrical system off","With the engine off, step on and off the brake to reduce pressure; the warning must come on by 60 psi","Drain all the air at once with the engine running"],
    answer:2,
    explanation:"Shut the engine off (or turn the key on, engine off), then fan the brakes to lower tank pressure. The low-air warning light and buzzer should come on before pressure drops below 60 psi.",
    handbook:"Check that the low air pressure warning signal comes on before the pressure drops to less than 60 psi by fanning off the air pressure with the engine off.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"If you continue to fan down (reduce) the air pressure after the warning comes on, the spring/parking brakes should activate. On a single vehicle this typically happens by:",
    options:["60 psi","Between 20 and 45 psi","10 psi","0 psi only"],
    answer:1,
    explanation:"Continuing to fan the brakes lowers pressure until the spring brakes come on, usually in the 20–45 psi range, confirming the automatic emergency/parking system works.",
    handbook:"Continue to reduce pressure and the spring brakes should come on automatically, on most vehicles in a range between 20 and 45 psi.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"How long should it take a dual air system to build from about 85 to 100 psi at operating rpm?",
    options:["Within 45 seconds","Within 3 minutes","Within 5 minutes","Build-up time does not matter"],
    answer:0,
    explanation:"In a typical dual air system, pressure should build from 85 to 100 psi within about 45 seconds at operating rpm. Slow build-up means the system may not keep up with heavy brake use.",
    handbook:"In dual air systems, the pressure should build from 85 to 100 psi within 45 seconds at the engine's operating rpm.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"What is the purpose of the safety relief valve usually installed in the first (supply) air tank?",
    options:["To warn the driver of low air","To release air if pressure gets too high (around 150 psi) and protect the tank","To park the vehicle","To dry the air"],
    answer:1,
    explanation:"The safety valve protects against too much pressure. It is usually set to open at about 150 psi; if it releases air, something is wrong and the system needs repair.",
    handbook:"The first tank the air compressor pumps air to has a safety valve, usually set to open at 150 psi to protect the system from too much pressure.",
    hbref:"§5.1 Air Reservoirs"
  },
  {
    q:"Why should you NOT use the parking (spring) brakes when the brakes are very hot, such as after coming down a steep grade?",
    options:["The spring brakes will not hold","Heat can damage the brakes, and on wet/cold days hot brakes can later freeze when cooled","It drains the air tanks","It is never a problem"],
    answer:1,
    explanation:"Applying parking brakes to very hot drums can damage them, and if it is wet and freezing, the cooling brakes can freeze so the vehicle cannot move. Let them cool, and chock the wheels if needed.",
    handbook:"If the brakes are very hot, do not use the parking brakes; they can be damaged, and if it is wet and below freezing, the brakes could freeze so the vehicle cannot move.",
    hbref:"§5.4 Using Air Brakes — Parking"
  },
  {
    q:"The proper way to make a normal stop with air brakes is to:",
    options:["Pump the pedal repeatedly to save air","Apply steady, controlled pressure without locking the wheels, easing off as you slow","Press the pedal all the way to the floor and hold","Use only the trailer hand valve"],
    answer:1,
    explanation:"Apply the brakes with steady, controlled pressure and reduce pressure as your speed drops. Fanning (pumping) wastes air, and stomping can lock wheels.",
    handbook:"To brake, apply enough pressure to bring the vehicle to a smooth, safe stop; do not fan the brakes on and off, which lets air out faster than the compressor can replace it.",
    hbref:"§5.4 Using Air Brakes"
  },
  {
    q:"What does the application pressure gauge tell you (if your vehicle has one)?",
    options:["How much air pressure is in the tanks","How much air pressure you are applying to the brakes","Engine oil pressure","Tire pressure"],
    answer:1,
    explanation:"The application gauge shows how much air pressure you are sending to the brakes when you press the pedal. Needing more and more pressure for the same effect can indicate brake trouble.",
    handbook:"The application pressure gauge shows how much air pressure you are applying to the brakes; an increasing amount needed to stop may mean a brake problem.",
    hbref:"§5.1 Brake Gauges"
  },
  {
    q:"Manual slack adjusters should be checked because brakes that are out of adjustment:",
    options:["Make the vehicle easier to stop","Are the most common air-brake problem and reduce braking power","Improve fuel mileage","Have no effect on safety"],
    answer:1,
    explanation:"Out-of-adjustment brakes are a leading cause of air-brake failure. With the system charged off and brakes released, pushrod travel should be minimal; excessive travel means weak braking.",
    handbook:"Brakes out of adjustment are the most common problem found in air-brake systems; check that slack adjusters do not move more than about one inch when pulled by hand.",
    hbref:"§5.3 Inspecting Air Brakes — Slack Adjusters"
  },
  {
    q:"In a properly working dual air brake system, if one part (for example the primary system) loses pressure, what happens?",
    options:["You lose all braking immediately","The other part still works to stop the vehicle, and the low-air warning comes on","The parking brakes release","The engine shuts off"],
    answer:1,
    explanation:"Dual systems have separate primary and secondary circuits. If one fails, the other can still stop the vehicle (with a longer distance), and the low-air warning will alert you to the loss.",
    handbook:"A dual air brake system has two separate systems; if one system loses pressure, the other can still be used to stop the vehicle.",
    hbref:"§5.2 Dual Air Brake Systems"
  },
  {
    q:"Before driving, you should let the air system charge fully. What is 'fully'?",
    options:["About 50 psi","About 60 psi","The normal operating range, up to governor cut-out (around 125 psi)","Exactly 150 psi"],
    answer:2,
    explanation:"Wait until the system charges into the normal operating range — up to the governor cut-out, usually around 125 psi — before you start moving, so you have full braking ability.",
    handbook:"Before driving, build air pressure to governor cut-out (usually around 125 psi); know your vehicle's requirements.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"To test the service brakes for proper function, you should:",
    options:["Slam them at high speed","Move forward slowly (about 5 mph), apply the brakes firmly, and check that the vehicle stops without pulling to one side","Only test the parking brake","Test them only after the first 50 miles"],
    answer:1,
    explanation:"At about 5 mph, push the brake pedal firmly. The vehicle should stop promptly without pulling left or right or feeling spongy. Pulling or delay indicates a problem.",
    handbook:"Test the service brakes by moving the vehicle slowly at about 5 mph and pushing the brake pedal firmly; note any vehicle pulling to one side, unusual feel, or delayed stopping.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"Repeatedly pressing and releasing (fanning) the brakes on a long downgrade is dangerous because:",
    options:["It overheats the engine","It can use air faster than the compressor can replace it, lowering pressure until the brakes fail","It improves cooling too much","It locks the steering"],
    answer:1,
    explanation:"Fanning the brakes lets air out faster than the compressor builds it. Pressure can drop until the spring brakes apply or braking is lost. Use a low gear and light steady braking instead.",
    handbook:"Pumping or fanning the brakes on a long downhill grade can reduce the air pressure so much that the brakes will not work; use proper low gear and steady braking.",
    hbref:"§5.4 Using Air Brakes"
  }
];

CAT("airbrakes").questions.push(
  {
    q:"In a typical S-cam foam brake, pressing the brake pedal sends air to the brake chamber, which pushes a rod that twists the:",
    options:["Air compressor","Slack adjuster and S-cam, forcing the brake shoes against the drum","Governor","Steering linkage"],
    answer:1,
    explanation:"Air enters the brake chamber and pushes the pushrod out, moving the slack adjuster, turning the S-cam, which spreads the brake shoes against the drum to create stopping friction.",
    handbook:"When you put on the brakes, air pressure pushes the rod out, moving the slack adjuster, which twists the S-cam and forces the brake shoes against the drum.",
    hbref:"§5.1 Air Brake System Parts"
  },
  {
    q:"What controls the parking/spring brakes in a newer vehicle?",
    options:["The foot brake pedal","A yellow, diamond-shaped push-pull control knob","The trailer hand valve","The clutch"],
    answer:1,
    explanation:"The parking brakes are set and released with a yellow, diamond-shaped push-pull knob. The red, eight-sided knob controls the trailer air supply on a combination vehicle.",
    handbook:"On newer vehicles, a yellow diamond-shaped knob controls the parking brakes; you pull it out to apply and push it in to release the spring brakes.",
    hbref:"§5.1 Parking Brake Controls"
  },
  {
    q:"You park a vehicle that has NO spring (emergency/parking) brakes for some reason. You should:",
    options:["Leave the service brakes applied with a wedge on the pedal","Use wheel chocks to keep it from rolling","Leave it in neutral with the engine running","Lower the air pressure to zero"],
    answer:1,
    explanation:"Never rely on holding the pedal or air pressure to park, since air can leak off. If a vehicle has no working spring brakes, chock the wheels to keep it from moving.",
    handbook:"Never leave a vehicle unattended without applying the parking brakes or chocking the wheels; the vehicle could move if air pressure is lost.",
    hbref:"§5.4 Using Air Brakes — Parking"
  },
  {
    q:"On a vehicle equipped with antilock brakes (ABS), if the ABS malfunction lamp stays on, you should know that:",
    options:["The brakes will not work at all","You still have normal brakes, but the ABS is not working — drive carefully and get it repaired","The parking brake is engaged","The air pressure is too high"],
    answer:1,
    explanation:"If the ABS light stays on, you have lost the anti-lock function but still have normal service brakes. Brake normally (avoid lockup) and have the ABS repaired soon.",
    handbook:"If the ABS is not working, you still have regular brakes; drive normally, but have the system serviced soon. The malfunction lamp tells you ABS is not working.",
    hbref:"§5.1 Antilock Braking Systems"
  },
  {
    q:"What is the purpose of the air dryer / alcohol evaporator in some air systems?",
    options:["To raise air pressure","To remove or reduce moisture so the brakes do not freeze in cold weather","To cool the brakes","To warn of low air"],
    answer:1,
    explanation:"Air dryers remove water and contaminants from the compressed air, and an alcohol evaporator helps reduce the chance of ice forming in the system and valves during cold weather.",
    handbook:"The air dryer removes moisture and some oil from the air; alcohol in an evaporator helps reduce the risk of ice in the air brake valves in cold weather.",
    hbref:"§5.1 Air Brake System Parts"
  },
  {
    q:"Why should you check the air compressor drive belt (if the compressor is belt-driven) during inspection?",
    options:["A loose or worn belt can keep the compressor from building enough air to brake safely","It affects the radio","It controls the parking brake","It cleans the air tanks"],
    answer:0,
    explanation:"If the compressor is belt-driven, a loose or badly worn belt can slip and the compressor may not keep up with air demand, leaving you without enough pressure to brake.",
    handbook:"If the air compressor is belt-driven, check the condition and tightness of the belt; a slipping belt can prevent the system from building enough air.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"The brake pedal in an air brake system is also called the:",
    options:["Governor","Foot valve or treadle valve","Slack adjuster","Tractor protection valve"],
    answer:1,
    explanation:"Pressing the foot valve (treadle valve) lets air flow to the brakes; releasing it lets the air out. Pressing harder applies more pressure.",
    handbook:"Pushing the brake pedal (also called the foot valve or treadle valve) lets air flow to the brake chambers; the harder you push, the more air pressure is applied.",
    hbref:"§5.1 Air Brake System Parts"
  },
  {
    q:"How should you brake in an emergency stop if your vehicle HAS ABS?",
    options:["Pump the brakes lightly","Press the brake pedal fully and hold it; the ABS will keep the wheels from locking","Use only the trailer brakes","Brake then release the moment you feel a skid"],
    answer:1,
    explanation:"With ABS, brake hard and stay on the pedal. The system rapidly modulates the brakes to prevent lockup, letting you keep steering control while stopping as quickly as possible.",
    handbook:"When you drive a vehicle with ABS and you need to stop fast, brake as hard as you can and keep steering; the ABS will keep the wheels from locking up.",
    hbref:"§5.4 Using Air Brakes — ABS"
  },
  {
    q:"During an air-brake inspection, excessive cracking, contamination, or thin brake linings means:",
    options:["The brakes are fine to use","The brakes may fail and the vehicle should not be driven until repaired","You should add brake fluid","You should drain the air tanks"],
    answer:1,
    explanation:"Cracked drums, oil/grease on the linings, or linings worn dangerously thin reduce braking and can cause failure. Such defects must be fixed before the vehicle is driven.",
    handbook:"Check brake drums for cracks and brake linings for being too thin or contaminated with oil or grease; such conditions can cause brake failure.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"The supply pressure gauge in the cab shows you:",
    options:["How much pressure you are applying to the brakes","How much pressure is in the air tanks","How fast the compressor turns","The trailer brake temperature"],
    answer:1,
    explanation:"The supply (system) pressure gauge tells you how much air is stored in the tanks. Dual-air vehicles often have two needles or two gauges, one for each circuit.",
    handbook:"All air-braked vehicles have a supply pressure gauge that shows how much pressure is in the air tanks.",
    hbref:"§5.1 Brake Gauges"
  },
  {
    q:"You are driving a long downgrade. Besides choosing a low gear, the recommended braking method is the 'snub' technique, which means:",
    options:["Holding light pressure the whole way down","Applying the brakes firmly to slow about 5 mph below your safe speed, then releasing, and repeating","Pumping rapidly the entire descent","Riding the brakes continuously"],
    answer:1,
    explanation:"In snub braking, when you reach your safe speed apply the brakes hard enough to slow about 5 mph below it, then release. Repeat as needed. This avoids the constant heat of riding the brakes.",
    handbook:"When the speed increases to your safe speed, apply the brakes firmly enough to feel a definite slowdown, then release them when about 5 mph below your safe speed.",
    hbref:"§5.4 Using Air Brakes — Downgrades"
  },
  {
    q:"What is the danger of keeping your foot lightly on the brake pedal (riding the brakes) on a long grade?",
    options:["It saves the brakes","It overheats the brakes, causing fade and possible failure","It builds air pressure too fast","It locks the wheels instantly"],
    answer:1,
    explanation:"Light constant braking generates heat without giving the brakes time to cool, leading to brake fade. Use engine braking and the snub method so the brakes can cool between applications.",
    handbook:"Brakes can get so hot that they lose their braking power; do not ride the brakes, and use the braking effect of the engine as the principal way to control speed on a downgrade.",
    hbref:"§5.4 Using Air Brakes — Downgrades"
  },
  {
    q:"After parking, the proper sequence before leaving an air-braked vehicle unattended includes:",
    options:["Leaving the parking brakes off so it can be moved","Applying the parking brakes (and chocking if needed), and never depending on air pressure alone","Releasing all air from the tanks","Leaving it in high gear with brakes off"],
    answer:1,
    explanation:"Always set the parking (spring) brakes when you leave the vehicle. Do not depend on service-brake air pressure to hold it, because leaks could let it roll.",
    handbook:"When you leave your vehicle, apply the parking brakes; do not rely on holding the brake pedal or on air pressure, which can leak away.",
    hbref:"§5.4 Using Air Brakes — Parking"
  },
  {
    q:"If your low-air warning comes on while driving, you should:",
    options:["Keep driving to the next town","Brake to a stop safely as soon as possible and park, because the spring brakes may apply suddenly","Turn off the warning and continue","Speed up to build air pressure"],
    answer:1,
    explanation:"Low air is an emergency. Loss of air can let the spring brakes come on by themselves, possibly at an unsafe moment. Get off the road and stop while you still have control.",
    handbook:"Any time the low air warning comes on, stop and safely park your vehicle as soon as possible; continued loss of air will cause the emergency brakes to come on.",
    hbref:"§5.4 Using Air Brakes"
  },
  {
    q:"The governor 'cut-in' pressure is the point at which the compressor:",
    options:["Stops pumping air","Starts pumping air back into the system again (about 100 psi)","Releases the safety valve","Engages the parking brake"],
    answer:1,
    explanation:"When tank pressure drops to about 100 psi, the governor lets the compressor resume pumping (cut-in). It cuts out again at the set pressure (usually around 125 psi). This cycle keeps pressure in range.",
    handbook:"The cut-in pressure is the level (about 100 psi) at which the governor allows the compressor to start pumping air again.",
    hbref:"§5.1 Air Compressor Governor"
  },
  {
    q:"On older vehicles, the front-wheel-brake limiting valve set to the 'slippery' position is intended to:",
    options:["Increase front braking on ice","Reduce front-brake pressure, but it actually reduces stopping power and is not recommended","Lock the front wheels","Apply the trailer brakes"],
    answer:1,
    explanation:"Studies show front-wheel braking is effective and does not cause skids in all conditions. Reducing front braking actually lengthens stopping distance, so use the normal position.",
    handbook:"Front wheel braking is good under all conditions; tests show front wheel skids from braking are not likely, so do not reduce front brake pressure.",
    hbref:"§5.1 Front Brake Limiting Valve"
  },
  {
    q:"While doing the walk-around, you find the air-pressure build-up is very slow and never reaches the normal range. You should:",
    options:["Drive anyway since the brakes feel fine","Not drive; a system that cannot build/maintain normal pressure is unsafe and must be repaired","Add more oil to the compressor","Drain the tanks and try again on the road"],
    answer:1,
    explanation:"If the system cannot build or hold normal pressure, you cannot count on the brakes under heavy use. Take the vehicle out of service and have it fixed before driving.",
    handbook:"If the air pressure does not build up to the normal operating range, do not drive the vehicle until the problem is repaired.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"What is one correct statement about brake lag and following distance with air brakes?",
    options:["Brake lag lets you follow more closely","Because of brake lag plus reaction time, you should keep extra following distance","Brake lag only matters when parking","Air brakes have no lag once warmed up"],
    answer:1,
    explanation:"Air brake lag adds to your reaction and braking distance, so heavy vehicles with air brakes need even more following room to stop safely.",
    handbook:"Air brakes take more time to work than hydraulic brakes; allow for brake lag by keeping a greater following distance.",
    hbref:"§5.4 Using Air Brakes"
  }
);

/* ============================ COMBINATION VEHICLES ============================ */
CAT("combination").questions = [
  {
    q:"The trailer's rear wheels track INSIDE the path of the front wheels when you turn. This is called off-tracking, and it means you should:",
    options:["Turn sharply right before any right turn","Steer the tractor wide before the turn so the trailer clears the corner","Keep the rear of the trailer close to the curb by turning wide as you complete the turn","Speed up through the turn"],
    answer:2,
    explanation:"Because the trailer off-tracks (cuts the corner), turn wide as you finish the turn — not by swinging wide at the start. Keep the tractor far enough out that the trailer's rear wheels clear the curb or object.",
    handbook:"When a vehicle goes around a corner, the rear wheels follow a different path than the front wheels (off-tracking); turn wide as you complete the turn to keep the rear from hitting the curb.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"A loaded high-clearance trailer is most likely to roll over because:",
    options:["It has too much weight on the steer axle","It has a high center of gravity, so it can tip on curves or quick lane changes","It is too long","The trailer brakes are too strong"],
    answer:1,
    explanation:"More than half of truck-driver deaths in rollovers involve a high center of gravity. Keep cargo low and centered, and take curves and ramps well below the posted speed.",
    handbook:"The two main causes of rollover are going too fast around turns and improper loading; keep the cargo centered and low, and slow down for curves.",
    hbref:"§6.1 Rollover Risks"
  },
  {
    q:"Your tractor's drive wheels lose traction and begin to skid, and the rear of the tractor starts to swing toward the trailer. This is the start of a:",
    options:["Trailer breakaway","Tractor (drive-wheel) jackknife","Normal off-track","Front-wheel skid"],
    answer:1,
    explanation:"When the tractor's drive wheels lock or spin and lose traction, the rear can swing out — a drive-wheel jackknife. To recover, stop braking (or ease off the throttle) so the wheels regain traction.",
    handbook:"When the drive wheels of the tractor begin to skid, the tractor can swing around into a jackknife; to recover, take your foot off the brake to let the wheels roll again.",
    hbref:"§6.1 Combination Skids"
  },
  {
    q:"You see in your mirror that the TRAILER has begun to swing out (trailer skid/jackknife). The correct response is to:",
    options:["Apply the trailer hand valve hard","Release the brakes to let the trailer wheels roll and regain traction","Steer sharply the opposite way and brake","Accelerate hard"],
    answer:1,
    explanation:"A trailer skid usually comes from locked trailer wheels. Release the brakes so the trailer wheels start rolling and grip again, which lets the trailer fall back in line behind the tractor.",
    handbook:"The way to stop a trailer skid is to release the brakes; this lets the trailer wheels roll again and regain their grip on the road.",
    hbref:"§6.1 Combination Skids"
  },
  {
    q:"The trailer hand valve (trolley or 'Johnson bar') applies only the trailer brakes. It should be used:",
    options:["To park the combination","To test that the trailer brakes work, but NOT to control the vehicle or prevent a skid","Whenever you go down a hill","Instead of the foot brake in normal stops"],
    answer:1,
    explanation:"Using the hand valve to slow down can cause a trailer skid because it brakes only the trailer. Use it to test the trailer brakes; for normal and emergency stops use the foot brake.",
    handbook:"Do not use the trailer hand valve in driving because of the danger of making the trailer skid; the hand valve should be used only to test the trailer brakes.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"On a combination vehicle, the RED eight-sided knob in the cab controls the:",
    options:["Tractor parking brakes","Trailer air supply / trailer emergency line","Trailer service brakes","Headlights"],
    answer:1,
    explanation:"The red, octagonal knob is the trailer air supply valve. Pushed in, it charges the trailer; pulled out, it shuts off air to the trailer and applies the trailer's emergency brakes.",
    handbook:"The red eight-sided knob controls the tractor protection valve and trailer air supply; push it in to supply the trailer with air and pull it out to close it.",
    hbref:"§6.2 Trailer Air Supply"
  },
  {
    q:"What is the purpose of the tractor protection valve?",
    options:["To inflate the tires","To keep air in the tractor brake system if the trailer breaks away or develops a bad leak","To raise the landing gear","To lock the fifth wheel"],
    answer:1,
    explanation:"If the trailer separates or a major leak occurs, the tractor protection valve closes to preserve air in the tractor so you can still brake the tractor and stop safely.",
    handbook:"The tractor protection valve keeps air in the tractor or truck brake system should the trailer break away or develop a bad leak.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"When coupling, after backing under the trailer you must check that the fifth-wheel locking jaws have closed:",
    options:["Around the head of the kingpin only","Around the shank (neck) of the kingpin, not on top of it","Under the landing gear","On the glad hands"],
    answer:1,
    explanation:"Look into the gap with a flashlight: the locking jaws must close completely around the shank of the kingpin, not catch on top of it. A poor lock can let the trailer separate.",
    handbook:"Check that the locking jaws are closed around the shank of the kingpin, not around the head of the kingpin; use a flashlight to be sure.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"After coupling, the best way to be sure the trailer is locked onto the fifth wheel is to:",
    options:["Tap the trailer with your hand","Lock the trailer brakes and gently pull forward against them (tug test)","Listen for a clicking sound","Check the trailer lights"],
    answer:1,
    explanation:"Do a tug test: with the trailer brakes locked (red knob out), pull gently forward in low gear. The trailer should stay attached. Then get out and visually inspect the connection.",
    handbook:"Test the coupling by pulling against the locked trailer brakes; the tractor should not move away from the trailer (the tug test).",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"There should be NO space (gap) between the upper and lower fifth wheel after coupling because:",
    options:["A gap improves the ride","A gap means the trailer is resting on the fifth-wheel lip, not locked, and could come loose","It looks better","A gap is always normal"],
    answer:1,
    explanation:"A visible gap between the trailer apron and the fifth wheel means the kingpin may not be locked in, and the trailer could break free. There must be no gap.",
    handbook:"Make sure there is no space between the upper and lower fifth wheel; if there is space, something is wrong and the kingpin may not be locked into the locking jaws.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"When connecting the air lines (glad hands), you must be careful NOT to:",
    options:["Connect the emergency line first","Cross the service and emergency air line connections","Use the seals","Connect them at all until moving"],
    answer:1,
    explanation:"Crossing the service and emergency glad hands sends air to the wrong place — you might have no trailer brakes when you need them. Many systems are color-coded or shaped to prevent crossing.",
    handbook:"If you do crossed the air lines, air would be sent to the service line instead of the emergency line and the trailer brakes would not work; make sure to connect the glad hands properly.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"If a trailer breaks away (separates) from the tractor while driving a properly maintained combination, the trailer's emergency brakes should:",
    options:["Release completely","Come on automatically because air is lost from the emergency line","Have no effect","Only work if you pull the hand valve"],
    answer:1,
    explanation:"Loss of air in the emergency (supply) line causes the trailer's emergency/spring brakes to apply automatically, helping stop the runaway trailer. This is why the system is designed to fail safe.",
    handbook:"If the trailer breaks away, the loss of air in the emergency line will cause the trailer emergency brakes to come on, which is meant to stop the trailer.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"Before backing the tractor under a trailer during coupling, you should make sure the trailer is at the right height so that:",
    options:["The trailer is much higher than the fifth wheel","The trailer will be lifted slightly when the tractor backs under it","The trailer is resting on the ground","The kingpin is above the fifth wheel"],
    answer:1,
    explanation:"Set the trailer just low enough that the tractor raises it slightly when backing under. Too high and you may miss the kingpin; too low and you can damage the trailer nose or fifth wheel.",
    handbook:"The trailer should be low enough that it is raised slightly by the tractor when the tractor is backed under it; if it is too low, the tractor may strike and damage the trailer nose.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"Quick, hard steering with an empty or lightly loaded trailer is dangerous mainly because of:",
    options:["Better traction","'Rearward amplification' — a sudden steer makes the trailer swing far more than the cab, and it can flip","Reduced off-tracking","Lower center of gravity"],
    answer:1,
    explanation:"A sudden steering move is amplified at the rear of the combination; the trailer can whip and roll over, especially when empty or top-heavy. Steer early and smoothly to avoid quick moves.",
    handbook:"Steer gently and smoothly when you are pulling a trailer; making a sudden movement with the steering wheel can cause the trailer to tip over (rearward amplification).",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"When uncoupling, before you pull the tractor out from under the trailer you must:",
    options:["Raise the landing gear all the way up","Lower the landing gear until it supports the trailer's weight, then disconnect lines and unlock the fifth wheel","Release the trailer brakes","Drive forward quickly"],
    answer:1,
    explanation:"Lower the landing gear so it firmly supports the trailer (but not so much it lifts the tractor), then disconnect and secure the air/electrical lines and release the fifth-wheel locking lever before pulling out slowly.",
    handbook:"Before uncoupling, lower the landing gear until it makes firm contact with the ground and supports the trailer; disconnect the air lines and electrical cable, then unlock the fifth wheel.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"Compared with a loaded combination, a bobtail tractor (no trailer) or a very lightly loaded rig:",
    options:["Always stops in a shorter distance","Can take longer to stop and the wheels can lock more easily because there is less traction","Cannot jackknife","Has better braking in every case"],
    answer:1,
    explanation:"With little or no load, the drive wheels have less weight and traction, so they can lock and skid sooner, and a bobtail tractor can be surprisingly hard to stop. Brake earlier and gently.",
    handbook:"Empty trucks and bobtail tractors have poor traction and may require longer stopping distances than a fully loaded vehicle because the wheels can lock up.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  }
];

CAT("combination").questions.push(
  {
    q:"How many air lines connect the tractor to the trailer, and what are they?",
    options:["One line that does everything","Two: the service (control) line and the emergency (supply) line","Three: service, emergency, and parking","Only an electrical line"],
    answer:1,
    explanation:"There are two air lines: the service line carries air controlled by the brake pedal/hand valve, and the emergency (supply) line charges the trailer tanks and controls the trailer emergency brakes.",
    handbook:"There are two air lines between the tractor and trailer: the service line and the emergency line; the emergency line is also called the supply line.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"When inspecting the fifth wheel, you should check that the release arm (locking lever) is:",
    options:["Pulled out in the open position","In the locked position with the safety latch (catch) closed over it","Removed entirely","Greased but unlocked"],
    answer:1,
    explanation:"The fifth-wheel release handle must be in the engaged/locked position and the safety latch must be closed over it. An unlatched or open release arm means the trailer is not safely locked.",
    handbook:"Check that the release arm is in the engaged position and the safety latch is in place over the locking lever.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"A sliding fifth wheel (one that can move forward or back) must be checked to ensure it is:",
    options:["As far forward as it will go at all times","Locked in position, with all locking pins fully engaged and no missing parts","Loose so it can self-adjust","Positioned only by weight"],
    answer:1,
    explanation:"A sliding fifth wheel changes weight distribution and turning clearance, so it must be locked in place with its pins fully engaged. An unlocked slider can shift while driving and is very dangerous.",
    handbook:"If the fifth wheel is a sliding type, check that it is properly locked and that all locking pins are engaged; never drive with the fifth wheel not locked.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"On a combination vehicle equipped with ABS, where would you typically see the trailer's ABS malfunction lamp?",
    options:["There is none on trailers","On the trailer, usually on the left (road) side; it tells you the trailer ABS is not working if it stays on","Only inside the tractor cab","On the kingpin"],
    answer:1,
    explanation:"Newer trailers have a yellow ABS malfunction lamp, usually on the left side. If it stays lit, the trailer's ABS is not working — you still have normal brakes but should get it repaired.",
    handbook:"Trailers with ABS have a yellow malfunction lamp on the left side; if it stays on, the trailer ABS is not working and should be serviced.",
    hbref:"§6.3 Antilock Brake Systems"
  },
  {
    q:"During the walk-around of a combination vehicle, the trailer's landing gear (dolly) should be:",
    options:["Left partway down for stability","Fully raised, with the crank handle secured","Removed before driving","Lowered until it touches the road"],
    answer:1,
    explanation:"Landing gear must be fully raised so it does not catch on the road, railroad crossings, or ramps, and the crank handle must be secured so it cannot swing out and strike someone or something.",
    handbook:"Make sure the landing gear is fully raised, there are no missing parts, and the crank handle is secured before driving.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"Why must the air lines (glad hands) and electrical cable be secured so they do not drag or tangle?",
    options:["For appearance only","A dragging line can be damaged or torn loose, causing loss of trailer brakes or lights","To save fuel","To keep them clean"],
    answer:1,
    explanation:"If the hoses or cable hang too low, they can snag, chafe, or be torn off, which can disable the trailer brakes or lights. Route them so they have slack to turn but cannot drag or rub.",
    handbook:"Check that the air and electrical lines are not cut, chafed, or tangled, and that they will not drag or rub against any part of the vehicle.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"You must make a quick lane change to avoid an obstacle in a combination vehicle. The safest technique is to:",
    options:["Brake hard and steer at the same time","Countersteer smoothly — steer to miss it, then steer back — without heavy braking, to avoid a skid or rollover","Lock the brakes and slide","Use the trailer hand valve"],
    answer:1,
    explanation:"Steering to avoid a crash usually needs less distance than braking. Steer smoothly to miss the hazard, then steer back, keeping the moves controlled. Hard braking while steering can cause a jackknife or rollover.",
    handbook:"Stopping is not always the safest action; you can almost always turn to miss an obstacle more quickly than you can stop. Countersteer by turning away then quickly back.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"Because a combination vehicle is long, when you cross or enter traffic you must remember that:",
    options:["You can accept the same gaps a car would","You need a much larger gap, because it takes longer to get the whole vehicle across or up to speed","Trailers make you accelerate faster","Length does not affect crossing time"],
    answer:1,
    explanation:"A loaded rig accelerates slowly and is long, so you need a bigger gap to pull out or cross. Make sure you can get fully across or up to speed before committing.",
    handbook:"Because of its length and slow acceleration, a combination vehicle needs a much larger gap to enter or cross traffic than a car would.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"The correct order when coupling is to inspect and prepare the fifth wheel and trailer FIRST, then:",
    options:["Connect the air lines before backing under","Position the tractor squarely in front, back slowly until contact, then back under and check the connection","Raise the landing gear before backing","Do the tug test before backing under"],
    answer:1,
    explanation:"Line up the tractor directly in front of the trailer (never back under at an angle), back slowly until the fifth wheel just touches the trailer, then continue back so the kingpin locks in before checking the connection.",
    handbook:"Position the tractor directly in front of the trailer; never back under the trailer at an angle because you might push the trailer sideways.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"Properly connecting the glad hands, you should also make sure the rubber seals are:",
    options:["Removed for a tighter fit","In good condition so the connection does not leak air","Coated in oil","Cross-connected"],
    answer:1,
    explanation:"The glad hand seals must be clean and in good shape; worn or missing seals let air leak, which can reduce or disable the trailer brakes. Replace bad seals before coupling.",
    handbook:"Check the glad hand seals and make sure they are in good condition; clean the couplers before connecting so the seal does not leak.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"What happens if you use only the trailer hand valve to hold a parked combination vehicle?",
    options:["It is the safest way to park","Air can leak off and the trailer could roll; you should set the spring (parking) brakes instead","It locks the kingpin","Nothing — it holds indefinitely"],
    answer:1,
    explanation:"The hand valve applies air-pressure (service) brakes to the trailer only, and air can bleed off over time. Always set the parking/spring brakes to hold a parked vehicle, and chock if needed.",
    handbook:"Do not use the trailer hand valve to hold a parked vehicle; air may leak away. Use the parking brakes.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"When backing a trailer, turning the steering wheel to the LEFT makes the trailer go:",
    options:["Left","Right (the opposite of the steering input)","Straight back only","It cannot be steered in reverse"],
    answer:1,
    explanation:"Backing a trailer is the opposite of backing a car: turning the wheel one way sends the trailer the other way, then you must steer back to follow it. Back slowly and use a helper and pull-ups as needed.",
    handbook:"When backing a trailer, turn the steering wheel in the opposite direction from the way you want the trailer to go; once it starts to turn, follow it by turning the wheel the other way.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"The fifth wheel and kingpin should be inspected for:",
    options:["Color only","Cracks, missing or loose mounting bolts, proper lubrication, and a kingpin that is not bent or damaged","Tire pressure","Fuel level"],
    answer:1,
    explanation:"Check the fifth wheel for cracks, missing/loose mounting bolts and proper grease, and check the kingpin and apron for bends or damage. A defective coupling can let the trailer separate.",
    handbook:"Check the fifth wheel for cracks, missing or damaged parts, proper lubrication, and that the mounting to the frame is secure; check the kingpin for damage.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"Why are mud flaps / splash guards checked during a combination vehicle inspection?",
    options:["They improve fuel economy","If they are missing, damaged, or dragging, the vehicle may be out of compliance and they can become a hazard","They hold the trailer up","They are decorative"],
    answer:1,
    explanation:"Splash guards must be present and secured where required; if they are torn, missing, or dragging, the vehicle can be cited and the loose material can be a road hazard.",
    handbook:"Check that the mud flaps/splash guards are not damaged and are fastened properly and not dragging on the ground.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"To prevent a rollover, the single most important things are to keep the load low/centered and to:",
    options:["Brake hard in every curve","Go slowly around turns, on/off ramps, and in lane changes","Carry the load high so it balances","Keep the trailer empty"],
    answer:1,
    explanation:"Most rollovers come from taking curves and ramps too fast. Slow well before the curve and keep steering smooth; combined with low, balanced cargo, this greatly reduces rollover risk.",
    handbook:"You can prevent rollovers by keeping the cargo as low as possible, keeping the load centered, and most of all by going slowly around turns.",
    hbref:"§6.1 Rollover Risks"
  },
  {
    q:"The proper position of the fifth wheel is also important because if the trailer kingpin is too far forward on a sliding unit:",
    options:["The ride is smoother","It can put too much weight on the steer axle and reduce turning clearance","It improves braking","It has no effect"],
    answer:1,
    explanation:"Where the fifth wheel/kingpin sits changes how weight is split between axles and how the cab clears the trailer in turns. It must be locked in a position that keeps axle weights legal and the cab clear of the trailer.",
    handbook:"The position of the sliding fifth wheel affects how the weight is distributed on the axles; make sure it is locked in a legal position.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"After connecting everything and before driving away, your final coupling checks should confirm:",
    options:["Only that the lights work","No gap at the fifth wheel, locking jaws around the kingpin, landing gear fully up, lines secured, and a successful tug test","Just the tire pressure","Only that the trailer is loaded"],
    answer:1,
    explanation:"Before pulling out, verify visually that there is no gap and the jaws are locked around the kingpin, the landing gear is fully raised with the handle secured, the air/electrical lines are connected and secured, and the tug test held.",
    handbook:"After coupling, inspect the connection: no space between upper and lower fifth wheel, locking jaws around the kingpin, landing gear fully raised, and air lines properly connected.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"If the service air line leaks or is disconnected while you press the brake, what is the danger?",
    options:["Nothing happens","You could lose trailer service braking, or air loss could trigger the trailer emergency brakes unexpectedly","The trailer accelerates","The steering locks"],
    answer:1,
    explanation:"A faulty service line can leave you without normal trailer braking, and a major air loss in the system can set off the trailer emergency brakes. Both are dangerous, so lines must be sound and properly connected.",
    handbook:"If the service line leaks, you may not have trailer brakes when you need them; a loss of air can cause the trailer emergency brakes to come on.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  }
);

/* ============================ TX SPECIAL REQUIREMENTS ============================ */
CAT("special").questions = [
  {
    q:"In Texas, the total outside width of a commercial vehicle or its load may not be greater than:",
    options:["96 inches","102 inches","108 inches","120 inches"],
    answer:1,
    explanation:"The maximum legal width in Texas is 102 inches (8.5 feet), including the load. Anything wider requires an oversize permit.",
    handbook:"The total outside width of a vehicle or its load may not be more than 102 inches, unless a permit is obtained.",
    hbref:"§14 Size and Weight Limits"
  },
  {
    q:"The maximum height of a vehicle and its load on Texas highways is:",
    options:["13 feet","13 feet 6 inches","14 feet","15 feet"],
    answer:2,
    explanation:"A vehicle and load may not exceed 14 feet in height in Texas. The driver is responsible for clearing bridges and overpasses regardless of posted heights.",
    handbook:"A vehicle, including its load, may not be more than 14 feet in height.",
    hbref:"§14 Size and Weight Limits"
  },
  {
    q:"If a load extends more than 4 feet beyond the rear of your vehicle, during the DAY you must mark the end with:",
    options:["A white flag","A red flag at least 12 inches square","An orange triangle","No marking is required"],
    answer:1,
    explanation:"A load projecting more than 4 feet past the rear must be flagged with a red flag at least 12 inches square at the extreme rear during daylight.",
    handbook:"If the load extends more than four feet beyond the rear of the bed, it must be marked with a red flag at least 12 inches square during the day.",
    hbref:"§14 Flags and Marking"
  },
  {
    q:"At NIGHT, a load extending more than 4 feet beyond the rear of the vehicle must be marked with:",
    options:["A red flag","A red light or lantern visible from at least 500 feet","A white reflector","Nothing extra"],
    answer:1,
    explanation:"After dark, replace the red flag with a red light or lantern at the end of the projecting load, visible for at least 500 feet to the rear.",
    handbook:"At night, the end of a load extending more than four feet beyond the rear must be marked with a red light or lantern visible from a distance of at least 500 feet.",
    hbref:"§14 Flags and Marking"
  },
  {
    q:"When one vehicle tows another using a chain, rope, or cable, Texas requires that the connection be marked with:",
    options:["A red flag","A white flag or cloth at least 12 inches square","A reflector triangle","Flashing lights"],
    answer:1,
    explanation:"A chain, rope, or cable used to tow must have a white flag or cloth at least 12 inches square attached to it so others can see the connection.",
    handbook:"When a chain, rope, or cable is used to tow a vehicle, there must be displayed upon the connection a white flag or cloth not less than 12 inches square.",
    hbref:"§14 Towing"
  },
  {
    q:"When towing a vehicle by chain, rope, or cable (not a rigid pole), the distance between the two vehicles must not be more than:",
    options:["5 feet","10 feet","15 feet","25 feet"],
    answer:2,
    explanation:"Except for a pole/rigid connection, the towing connection may not exceed 15 feet between the two vehicles.",
    handbook:"The connection between two vehicles being towed may not be more than 15 feet, except for a connection between two vehicles by a pole.",
    hbref:"§14 Towing"
  },
  {
    q:"Brakes that act on all wheels of the rear axle (with a single control the driver can operate) are required on any trailer or semitrailer in Texas with a gross weight in excess of:",
    options:["2,000 pounds","3,000 pounds","4,500 pounds","10,000 pounds"],
    answer:2,
    explanation:"Trailers and semitrailers over 4,500 pounds gross weight must have brakes acting on both wheels of the rear axle, operated by a single control within the driver's reach.",
    handbook:"Every trailer or semitrailer with a gross weight in excess of 4,500 pounds must be equipped with brakes that act on all wheels of the rear axle and that can be applied by the driver from a single control.",
    hbref:"§14 Brakes"
  },
  {
    q:"Every commercial motor vehicle in Texas must have two RED reflectors on the rear, mounted at a height of:",
    options:["Not less than 12 nor more than 48 inches","Not less than 24 nor more than 60 inches above the road","Exactly 36 inches","Any height the driver chooses"],
    answer:1,
    explanation:"Rear reflectors must be mounted not less than 24 inches and not more than 60 inches above the road surface so they are visible to following traffic.",
    handbook:"Reflectors must be mounted at a height of not less than 24 inches and not more than 60 inches above the road on which the vehicle stands.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"On a truck or bus 80 inches or more in overall width, the front clearance lamps must be ____ and the rear clearance lamps must be ____.",
    options:["red; amber","amber; red","white; red","amber; green"],
    answer:1,
    explanation:"Vehicles 80 inches or more wide must show amber clearance lamps to the front and red clearance lamps to the rear so their width is visible at night.",
    handbook:"Every bus or truck 80 inches or more in width must have amber front clearance lamps and red rear clearance lamps to indicate its extreme width.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"In Texas, the maximum gross weight of any vehicle or combination, including the load, generally may not exceed:",
    options:["60,000 pounds","72,000 pounds","80,000 pounds","100,000 pounds"],
    answer:2,
    explanation:"The maximum gross weight without a permit is 80,000 pounds. Single axles are generally limited to 20,000 pounds and tandem axles to 34,000 pounds.",
    handbook:"The maximum gross weight allowed for any vehicle or combination of vehicles, including the load, is 80,000 pounds.",
    hbref:"§14 Size and Weight Limits"
  },
  {
    q:"Tail lamps on a commercial vehicle must emit a red light that is plainly visible from the rear at a distance of:",
    options:["300 feet","500 feet","1,000 feet","100 feet"],
    answer:2,
    explanation:"Every vehicle must have at least two tail lamps showing red to the rear, plainly visible from 1,000 feet away.",
    handbook:"Tail lamps must emit a red light plainly visible from a distance of 1,000 feet to the rear.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"A stop lamp (brake light) must emit a red or amber light visible in normal daylight from the rear at a distance of at least:",
    options:["100 feet","300 feet","500 feet","1,000 feet"],
    answer:1,
    explanation:"Stop lamps must be visible in normal sunlight from at least 300 feet to the rear, warning following drivers that you are braking.",
    handbook:"A stop lamp must emit a red or amber light and be actuated on application of the service brake, visible in normal sunlight at a distance of at least 300 feet.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"You must use your headlamps (lighted lamps) when light is insufficient or conditions are poor — specifically when a person or vehicle is not clearly visible at a distance of:",
    options:["500 feet","1,000 feet","1,500 feet","250 feet"],
    answer:1,
    explanation:"Lights are required from a half hour after sunset to a half hour before sunrise, and any time persons or vehicles cannot be clearly seen at 1,000 feet ahead.",
    handbook:"A vehicle must display lighted lamps when, due to insufficient light or unfavorable conditions, a person or vehicle is not clearly discernible at a distance of 1,000 feet ahead.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"In Texas, the driver of a truck (or a vehicle towing another) outside a business or residential district must NOT follow another such vehicle more closely than:",
    options:["100 feet","200 feet","300 feet","500 feet"],
    answer:2,
    explanation:"Trucks and combinations must leave at least 300 feet between them on the open highway so passing vehicles can move in and out safely. This does not prevent overtaking and passing.",
    handbook:"The driver of a truck or of a motor vehicle drawing another vehicle, when traveling outside a business or residential district, shall not follow within 300 feet of another such vehicle.",
    hbref:"§14 Following Distance"
  },
  {
    q:"A slow-moving vehicle emblem (orange triangle) is intended for vehicles designed to operate at speeds of:",
    options:["less than 25 mph","less than 45 mph","any speed","more than 55 mph"],
    answer:0,
    explanation:"The fluorescent orange triangular emblem warns others that the vehicle moves at 25 mph or less, such as farm equipment, so faster traffic can slow in time.",
    handbook:"The slow-moving vehicle emblem is required on vehicles designed to operate at 25 mph or less to warn other drivers.",
    hbref:"§14 Special Equipment"
  },
  {
    q:"Texas generally prohibits showing which lamp color toward the FRONT of a vehicle?",
    options:["White","Amber","Red","Blue or red light to the front"],
    answer:3,
    explanation:"A vehicle may not display a red light visible from directly in front; red is for the rear. Forward-facing lamps are white or amber. Flashing blue/red lights are reserved for authorized vehicles.",
    handbook:"A motor vehicle may not be equipped with a lamp that displays a red light visible from directly in front of the vehicle.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"When you must leave a disabled commercial vehicle stopped on a Texas highway, you are required to:",
    options:["Leave it and return later","Place warning devices (reflective triangles/flares) to warn approaching traffic","Only turn on the radio","Stand behind the vehicle waving"],
    answer:1,
    explanation:"A stopped CMV on the traveled part or shoulder of a highway must be marked with warning devices (such as reflective triangles) so other drivers are warned in time to avoid it.",
    handbook:"Whenever a commercial motor vehicle is stopped on the traveled portion or shoulder of a highway, the driver shall place warning devices to warn approaching traffic.",
    hbref:"§14 Stopping on Highways"
  }
];

CAT("special").questions.push(
  {
    q:"In Texas you must dim your high-beam headlights when an oncoming vehicle is within:",
    options:["100 feet","300 feet","500 feet","1,000 feet"],
    answer:2,
    explanation:"Lower (dim) your high beams when within 500 feet of an oncoming vehicle, and within 300 feet when following another vehicle, so you do not blind other drivers.",
    handbook:"The driver must use a distribution of light (low beam) when within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"Before you can take the other Texas CDL knowledge tests (like General Knowledge), you must first pass the:",
    options:["Air Brakes test","Combination test","Special Requirements test","Road skills test"],
    answer:2,
    explanation:"Texas requires applicants to pass the Special Requirements test (Section 14) before being allowed to take the other CDL knowledge exams for a CLP or CDL.",
    handbook:"You must pass the Texas Special Requirements test before you are allowed to proceed with the other commercial knowledge tests.",
    hbref:"§14 Special Requirements Overview"
  },
  {
    q:"Texas law prohibits coasting downhill with the gears in neutral. The main reason is:",
    options:["It saves no fuel","You lose the engine's braking effect and control of the vehicle","It is bad for the tires","It is only a problem for cars"],
    answer:1,
    explanation:"Coasting in neutral down a grade takes away engine braking and reduces your control, making it harder to respond. It is illegal and unsafe for commercial vehicles.",
    handbook:"The operator of a vehicle moving on a downgrade may not coast with the gears of the vehicle in neutral.",
    hbref:"§14 Rules of Operation"
  },
  {
    q:"A vehicle carrying a placarded amount of hazardous materials in Texas must, at a railroad crossing:",
    options:["Speed up to clear quickly","Always stop, then proceed only when it is safe","Stop only if a train is visible","Ignore the crossing if no gate"],
    answer:1,
    explanation:"Placarded hazmat vehicles (and buses with passengers) must stop at railroad crossings, check that the way is clear, and then cross without shifting gears on the tracks.",
    handbook:"Vehicles transporting placarded amounts of hazardous materials must stop at all railroad crossings and proceed only when it is safe to do so.",
    hbref:"§14 Hazardous Materials / Railroad Crossings"
  },
  {
    q:"Every motor vehicle in Texas must be equipped with a muffler that:",
    options:["Can be bypassed with a cutout for more power","Prevents excessive or unusual noise and is in good working order","Is optional on diesel trucks","Only needs to work in the city"],
    answer:1,
    explanation:"A working muffler is required to prevent excessive noise; muffler cutouts and bypasses are prohibited, and a vehicle may not emit excessive smoke.",
    handbook:"A motor vehicle must be equipped with a muffler in good working order to prevent excessive or unusual noise; a muffler cutout or bypass is not permitted.",
    hbref:"§14 Vehicle Equipment"
  },
  {
    q:"A single motor vehicle (other than a truck-tractor) in Texas generally may not be longer than:",
    options:["40 feet","45 feet","53 feet","65 feet"],
    answer:1,
    explanation:"A single vehicle other than a truck-tractor is limited to 45 feet in length without a permit. Different limits apply to semitrailers and combinations.",
    handbook:"A single motor vehicle, other than a truck-tractor, may not have an overall length, including the load, greater than 45 feet.",
    hbref:"§14 Size and Weight Limits"
  },
  {
    q:"When the rear-view through the vehicle is obstructed by the load or body, Texas requires the vehicle to be equipped with:",
    options:["A backup camera only","An outside mirror that gives a view of the highway for at least 200 feet to the rear","No special equipment","An extra tail lamp"],
    answer:1,
    explanation:"If you cannot see behind through the vehicle, you must have a mirror (typically on the left, and in practice both sides) that reflects the road for at least 200 feet to the rear.",
    handbook:"A vehicle must have a mirror that reflects to the driver a view of the highway for a distance of at least 200 feet to the rear.",
    hbref:"§14 Vehicle Equipment"
  },
  {
    q:"A load may not extend beyond the FRONT of a passenger-car-type vehicle, and on trucks the front overhang is limited. In general a load should not extend beyond the front of the vehicle more than:",
    options:["3 feet","6 feet","10 feet","There is no front limit"],
    answer:0,
    explanation:"Loads must be secured and are limited in how far they can project. A load generally should not extend more than 3 feet beyond the front of the vehicle.",
    handbook:"A load on a vehicle may not extend more than three feet beyond the front of the vehicle.",
    hbref:"§14 Load Limits"
  },
  {
    q:"Headlamps on a commercial vehicle must be white and mounted at a height (measured to the center) of:",
    options:["Not lower than 12 nor higher than 36 inches","Not lower than 24 nor higher than 54 inches","Exactly 60 inches","Any height"],
    answer:1,
    explanation:"Two white headlamps are required, mounted at a height of not less than 24 inches and not more than 54 inches, so they light the road properly without blinding others.",
    handbook:"Headlamps must be mounted at a height of not more than 54 inches nor less than 24 inches and must show a white light.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"When you park a commercial vehicle on a Texas highway at night (where parking is allowed), you should:",
    options:["Turn off all lights to save the battery","Leave the clearance and marker lamps (or parking lamps) lit so others can see the vehicle","Use only the brake lights","Put the high beams on"],
    answer:1,
    explanation:"A vehicle parked or stopped on a roadway at night must display lamps (clearance/marker or parking lamps) so approaching drivers can see it. Better still, get completely off the road.",
    handbook:"A vehicle stopped or parked on a roadway at nighttime must display lamps that are visible to approaching traffic from front and rear.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"Texas restricts the number and aim of spotlights and auxiliary driving lamps. These lamps must be:",
    options:["As bright and numerous as you like","Limited in number and aimed so the beam does not blind oncoming drivers","Red in color","Mounted on the rear"],
    answer:1,
    explanation:"Auxiliary driving lamps and spotlights are limited in number and must be aimed so they do not project a glaring beam into the eyes of oncoming drivers.",
    handbook:"Auxiliary driving lamps and spot lamps must be aimed and used so that no part of the high-intensity beam strikes the eyes of an approaching driver.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"Directional (turn) signal lamps are required on a Texas commercial vehicle when:",
    options:["Never; hand signals are always enough","The vehicle is so wide or the load so positioned that hand-and-arm signals cannot be clearly seen","Only at night","Only in the city"],
    answer:1,
    explanation:"If the vehicle or load is wide enough that a hand-and-arm signal would not be visible to traffic front and rear, electric turn signals are required.",
    handbook:"A vehicle must be equipped with turn signal lamps if a hand-and-arm signal cannot be seen by other drivers because of the width of the vehicle or load.",
    hbref:"§14 Vehicle Equipment"
  },
  {
    q:"On a vehicle towing a trailer, in addition to the regular coupling, Texas requires:",
    options:["Nothing more","Safety chains or other secondary connection capable of holding the trailer if the main hitch fails","A second driver","A red flag on the hitch"],
    answer:1,
    explanation:"Safety chains (or an equivalent secondary attachment) are required so that if the primary coupling fails, the trailer stays connected and does not break away.",
    handbook:"A trailer must be coupled with safety chains or other devices to the towing vehicle so the trailer will not break loose if the main connection fails.",
    hbref:"§14 Towing"
  },
  {
    q:"Two red reflectors are required on the rear of a CMV in addition to lamps because reflectors:",
    options:["Replace the need for tail lamps","Show the vehicle even if the electrical lamps fail, when light shines on them","Make the truck look better","Are only for daytime"],
    answer:1,
    explanation:"Reflectors give a back-up warning: even if a tail lamp burns out, the reflector returns light from another vehicle's headlights so the truck remains visible from the rear.",
    handbook:"Reflectors are required so the rear of the vehicle is visible even when the lamps are not lit, by reflecting light from approaching vehicles.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"Burning (flame-type) flares or fusees may NOT be used as warning devices for a vehicle that is:",
    options:["Carrying general freight","Transporting flammable or explosive materials (or any cargo where a flame is dangerous)","Parked in a lot","Empty"],
    answer:1,
    explanation:"Open-flame warning devices are prohibited around vehicles hauling flammable or explosive loads; reflective triangles or electric lanterns must be used instead to avoid ignition.",
    handbook:"Flame-producing emergency signals may not be used with vehicles transporting explosives, flammable liquids, or flammable gases; use reflective warning devices instead.",
    hbref:"§14 Warning Devices"
  },
  {
    q:"Mud flaps or splash guards behind the rear wheels are required mainly to:",
    options:["Improve fuel economy","Keep water, mud, and debris from being thrown onto following vehicles","Hold the load down","Reduce tire wear"],
    answer:1,
    explanation:"Splash guards reduce the spray of water, mud, and rocks toward vehicles behind, improving their visibility and safety. They must be present, secured, and not dragging.",
    handbook:"Vehicles must have rear fenders, covers, or splash aprons to reduce the spray or splash of water or mud onto following vehicles.",
    hbref:"§14 Vehicle Equipment"
  },
  {
    q:"A driver may not block or stop on a railroad crossing. If traffic ahead might trap you on the tracks, you should:",
    options:["Stop on the tracks and wait","Wait before the crossing until you are sure you can fully clear it","Cross quickly and hope for the best","Reverse over the crossing"],
    answer:1,
    explanation:"Never start across a crossing unless you can get completely over without stopping. Texas law prohibits stopping on a railroad crossing.",
    handbook:"A driver may not enter a railroad grade crossing unless there is sufficient space to drive completely through the crossing without stopping.",
    hbref:"§14 Railroad Crossings"
  },
  {
    q:"To exceed the legal size or weight limits in Texas, a driver or carrier must:",
    options:["Drive only at night","Obtain an oversize/overweight permit before the trip","Add more axles on the road","Reduce tire pressure"],
    answer:1,
    explanation:"Loads or vehicles over the legal width, height, length, or weight limits require an oversize/overweight permit, which may also set the route, time, and escort requirements.",
    handbook:"A vehicle or load that exceeds the legal limits for size or weight may be operated only under a permit issued for that purpose.",
    hbref:"§14 Permits"
  }
);

/* ============================ CLASS A ROADMAP CONFIG ============================
   Everything below is data-driven so new pieces can be added later:
   - To add a new KNOWLEDGE test set: add a category object at the top of this
     file with classA:true and it will appear in the roadmap automatically.
   - To turn an endorsement "Coming soon" chip into a real, practiceable test:
     give it a catId that matches a real category and set active:true.
   - readyTarget = how many different tests you must pass for that requirement
     to show "Ready". Change these numbers to whatever you like.
*/
(function(){
  var READY = { special:3, general:4, airbrakes:3, combination:3 };
  window.CDL_DATA.categories.forEach(function(c){
    c.readyTarget = READY[c.id] || 3;   // tests to pass before "Ready"
    c.classA = true;                    // required for a Class A CDL
  });

  window.CDL_DATA.roadmap = {
    // In-person tests at a Texas DPS office (not practiceable in this app)
    skills: [
      { name:"Pre-Trip Vehicle Inspection", note:"Show you can inspect the vehicle and explain what you check." },
      { name:"Basic Control Skills",        note:"Backing, alley dock, offset and parking maneuvers in the yard." },
      { name:"On-Road Driving Test",        note:"Drive a set route with an examiner." }
    ],
    // Optional endorsements — placeholders you can activate later
    endorsements: [
      { code:"H", name:"HazMat",          active:false },
      { code:"N", name:"Tanker",          active:false },
      { code:"T", name:"Doubles/Triples", active:false },
      { code:"P", name:"Passenger",       active:false },
      { code:"S", name:"School Bus",      active:false }
    ]
  };
})();

/* ============================================================
   ADDITIONS from the Texas CDL Class A Study Guide (PDF)
   ============================================================ */

CAT("special").questions.push(
  {
    q:"In Texas, a truck, bus, or trailer that is 80 inches or more wide OR 30 feet or more long must turn on its hazard (flasher) lights when:",
    options:["Driving at night","Stopped on a roadway or shoulder (unless legally parked in a city or loading passengers)","Only during a roadside inspection","Whenever the engine is running"],
    answer:1,
    explanation:"Wide (80 in+) or long (30 ft+) vehicles must use hazard flashers any time they are stopped on the traveled part or shoulder of a highway, except when legally parked within a city or loading/unloading passengers.",
    handbook:"A vehicle 80 inches or more in width or 30 feet or more in length must display emergency warning flashers when stopped on a roadway or shoulder, except when legally parked within a city or loading or unloading passengers.",
    hbref:"§14 Hazard Warning Lights"
  },
  {
    q:"Texas requires mud flaps (splash guards) on trucks and trailers with four or more tires on the rear axle. The flaps must reach within:",
    options:["4 inches of the road","8 inches of the road","12 inches of the road","There is no height requirement"],
    answer:1,
    explanation:"Splash guards must hang to within 8 inches of the road surface to catch spray and debris. Pole trailers and bobtail tractors are excepted.",
    handbook:"All trucks and trailers having four or more tires on the rear axle must have mud flaps that reach within 8 inches of the road surface.",
    hbref:"§14 Vehicle Equipment"
  },
  {
    q:"When passing a motorcycle or bicycle, Texas requires you to:",
    options:["Share the lane to save time","Allow at least 6 feet of clearance and move into the next lane to pass","Pass only on the right shoulder","Sound your horn and pass close by"],
    answer:1,
    explanation:"Give a motorcyclist or bicyclist at least 6 feet of space and change lanes to pass — do not share the lane, because large vehicles create wind gusts and have large blind spots.",
    handbook:"Allow at least 6 feet to the left of a motorcycle or bicycle and do not share the lane; move into the next lane to pass.",
    hbref:"§14 Sharing the Road"
  },
  {
    q:"After you establish Texas residency or take a job in Texas, out-of-state license plates are recognized for:",
    options:["10 days","20 days","30 days","90 days"],
    answer:2,
    explanation:"You have 30 days to register your vehicle in Texas after establishing residency or gainful employment. A buyer's temporary cardboard tag is valid for only 20 days.",
    handbook:"Out-of-state plates are recognized for 30 days after you establish residency or accept gainful employment; a buyer's temporary tag is valid for 20 days.",
    hbref:"§14 Registration"
  },
  {
    q:"Under Texas equipment rules, a combination of vehicles weighing MORE than 3,000 lb must be able to stop from 20 mph within:",
    options:["20 feet","40 feet","50 feet","80 feet"],
    answer:2,
    explanation:"Over 3,000 lb the brakes must stop the vehicle within 50 feet at 20 mph; a combination of 3,000 lb or less must stop within 40 feet.",
    handbook:"A combination of vehicles weighing more than 3,000 pounds must stop within 50 feet from 20 mph; 3,000 pounds or less must stop within 40 feet.",
    hbref:"§14 Brakes"
  },
  {
    q:"A Texas truck hauling loose material such as dirt, sand, gravel, or wood chips must:",
    options:["Simply drive slowly","Fully enclose or cover the load so it cannot blow or spill (except agricultural products in their natural state)","Display a red flag","Travel only at night"],
    answer:1,
    explanation:"Loose materials must be enclosed or covered to keep them from blowing or spilling onto the road and other vehicles. Agricultural products in their natural state are excepted.",
    handbook:"Loose material such as dirt, sand, gravel, or wood chips must be enclosed or covered to prevent it from blowing or spilling, except agricultural products in their natural state.",
    hbref:"§14 Load Limits"
  },
  {
    q:"In Texas, the maximum number of vehicles allowed in a single combination is:",
    options:["Two","Three","Four","No limit"],
    answer:1,
    explanation:"No more than three vehicles may be combined. A semitrailer in a tractor-semitrailer may be up to 59 ft, and most combinations other than a truck-tractor are limited to 65 ft overall.",
    handbook:"No more than three vehicles may be in a combination; a semitrailer may not exceed 59 feet and a combination other than a truck-tractor may not exceed 65 feet.",
    hbref:"§14 Size and Weight Limits"
  },
  {
    q:"The slow-moving vehicle (SMV) emblem — the orange triangle — is required on vehicles designed for 25 mph or less, and:",
    options:["May also be used on any vehicle for extra visibility","Is illegal to display on a vehicle that travels faster than 25 mph","Is optional on farm equipment","Replaces the need for tail lamps"],
    answer:1,
    explanation:"The SMV emblem warns of vehicles moving at 25 mph or less. Displaying it on a faster vehicle is illegal because it misleads other drivers.",
    handbook:"The slow-moving vehicle emblem is required on vehicles designed to operate at 25 mph or less and may not be displayed on a faster vehicle.",
    hbref:"§14 Special Equipment"
  }
);

/* ===== HARD set — TX Special Requirements ===== */
CAT("special").questions.push(
  {
    q:"A load extends 5 feet past the rear of your truck in daylight. You must mark the end with:",
    options:["A red flag at least 12 inches square","A white flag 12 inches square","A red light visible 500 feet","Nothing — marking is only required past 6 feet"],
    answer:0,
    explanation:"Over 4 feet of rear overhang requires a red flag (at least 12 in square) by day. White flags mark towing connections; a red light is the night requirement; the trigger is 4 feet, not 6.",
    handbook:"A load extending more than four feet beyond the rear must be marked with a red flag at least 12 inches square during the day.",
    hbref:"§14 Flags and Marking"
  },
  {
    q:"You are towing a broken-down car with a steel chain. Texas requires the chain to display:",
    options:["A red flag 12 inches square","A white flag or cloth at least 12 inches square","An orange triangle","A burning red light"],
    answer:1,
    explanation:"A chain, rope, or cable used to tow must show a white flag or cloth at least 12 inches square. Red flags mark a projecting load, not a towing connection.",
    handbook:"When a chain, rope, or cable is used to tow, a white flag or cloth not less than 12 inches square must be displayed on the connection.",
    hbref:"§14 Towing"
  },
  {
    q:"On an 84-inch-wide truck, which of the following is WRONG?",
    options:["Amber clearance lamps at the front","Red clearance lamps at the rear","Two red reflectors at the rear, 24–60 inches high","Amber clearance lamps at the rear"],
    answer:3,
    explanation:"Rear lamps and reflectors are RED, not amber; amber is for the front. So 'amber clearance lamps at the rear' is the wrong statement.",
    handbook:"Clearance and side-marker lamps near the front are amber; those at the rear are red.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"Which pair of mounting-height ranges is correct?",
    options:["Headlamps 24–54 in; rear reflectors 24–60 in","Headlamps 24–60 in; rear reflectors 24–54 in","Headlamps 12–48 in; rear reflectors 24–60 in","Both 24–54 in"],
    answer:0,
    explanation:"White headlamps mount 24 to 54 inches high; rear red reflectors mount 24 to 60 inches high. Do not swap the two ranges.",
    handbook:"Headlamps are mounted not less than 24 nor more than 54 inches high; rear reflectors not less than 24 nor more than 60 inches.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"Outside a business or residential district, one truck must not follow another truck closer than 300 feet. This rule:",
    options:["Forbids one truck from ever passing another","Does NOT prevent overtaking and passing","Applies only after dark","Applies only inside city limits"],
    answer:1,
    explanation:"Trucks must leave 300 feet between them on the open highway so others can pass safely, but the rule does not prohibit overtaking and passing.",
    handbook:"A truck shall not follow within 300 feet of another truck outside a business or residential district; this does not prevent overtaking and passing.",
    hbref:"§14 Following Distance"
  },
  {
    q:"A combination of vehicles weighing 3,500 lb must be able to stop from 20 mph within:",
    options:["40 feet","50 feet","30 feet","60 feet"],
    answer:1,
    explanation:"Over 3,000 lb the limit is 50 feet from 20 mph; 3,000 lb or less is 40 feet. 3,500 lb is over 3,000, so 50 feet.",
    handbook:"A combination over 3,000 pounds must stop within 50 feet from 20 mph; 3,000 pounds or less within 40 feet.",
    hbref:"§14 Brakes"
  },
  {
    q:"Without a permit, which vehicle-plus-load is within BOTH the Texas width and height limits?",
    options:["102 inches wide and 14 feet high","108 inches wide and 14 feet high","102 inches wide and 14 feet 6 inches high","96 inches wide and 15 feet high"],
    answer:0,
    explanation:"Maximum width is 102 inches and maximum height is 14 feet. Only the first option meets both; the others exceed width or height.",
    handbook:"Maximum width is 102 inches and maximum height is 14 feet without a permit.",
    hbref:"§14 Size and Weight Limits"
  },
  {
    q:"Mud flaps are required on trucks/trailers that have ____ on the rear axle, and must reach within ____ of the road.",
    options:["four or more tires; 8 inches","two or more tires; 6 inches","any number of tires; 12 inches","four or more tires; 4 inches"],
    answer:0,
    explanation:"Vehicles with four or more tires on the rear axle need mud flaps reaching within 8 inches of the road (pole trailers and bobtails excepted).",
    handbook:"Trucks and trailers with four or more tires on the rear axle must have mud flaps reaching within 8 inches of the road.",
    hbref:"§14 Vehicle Equipment"
  },
  {
    q:"Your out-of-state plates are recognized for 30 days after you take a Texas job. A buyer's temporary cardboard tag, however, is valid for:",
    options:["30 days","20 days","60 days","90 days"],
    answer:1,
    explanation:"Out-of-state plates: 30 days after residency or employment. A buyer's temporary cardboard tag: only 20 days. Do not confuse the two figures.",
    handbook:"Out-of-state plates are recognized 30 days after residency or employment; a buyer's temporary tag is valid 20 days.",
    hbref:"§14 Registration"
  },
  {
    q:"In Texas, which of the following is LEGAL / permitted?",
    options:["Coasting downhill with the gears in neutral","A placarded hazmat truck rolling through a clear crossing without stopping","Showing a red light toward the front of the vehicle","Covering a gravel load so it cannot blow out"],
    answer:3,
    explanation:"Covering loose loads is required and legal. Coasting in neutral, hazmat failing to stop at crossings, and a red light to the front are all prohibited.",
    handbook:"Loose materials must be covered to prevent blowing or spilling; coasting in neutral, not stopping placarded hazmat at crossings, and red light to the front are prohibited.",
    hbref:"§14 Rules of Operation"
  },
  {
    q:"Tail lamps must be visible ____ to the rear; stop lamps must be visible in daylight from ____.",
    options:["1,000 feet; 300 feet","500 feet; 1,000 feet","300 feet; 1,000 feet","1,000 feet; 500 feet"],
    answer:0,
    explanation:"Tail lamps (red) must be visible 1,000 feet to the rear; stop lamps must be visible 300 feet in normal daylight. Do not swap the numbers.",
    handbook:"Tail lamps must be visible 1,000 feet to the rear; stop lamps must be visible at least 300 feet in normal sunlight.",
    hbref:"§14 Lighting and Reflectors"
  },
  {
    q:"A truck 30 feet long but only 70 inches wide breaks down on the shoulder. Must it turn on hazard flashers?",
    options:["No — it is under 80 inches wide","Yes — being 30 feet or more long triggers the requirement when stopped on a roadway or shoulder","Only if it is after dark","Only inside city limits"],
    answer:1,
    explanation:"The rule applies to vehicles 80 inches OR more wide OR 30 feet OR more long. At 30 feet long it qualifies, so flashers are required when stopped on the roadway/shoulder (except legal city parking or loading).",
    handbook:"A vehicle 80 inches or more in width or 30 feet or more in length must display emergency flashers when stopped on a roadway or shoulder.",
    hbref:"§14 Hazard Warning Lights"
  }
);

CAT("general").questions.push(
  {
    q:"The recommended pre-trip inspection uses a seven-step method. What is the correct general order?",
    options:["Start engine, lights, walk-around, brakes, cab, overview, signals","Vehicle overview, engine compartment, start engine and check the cab, lights, walk-around, signal lights, brake-system check","Brakes first, then engine, then lights, then walk-around","Walk-around, brakes, overview, engine, lights, cab, signals"],
    answer:1,
    explanation:"The seven steps are: (1) vehicle overview, (2) engine compartment, (3) start engine and check the cab, (4) check the lights, (5) walk-around inspection, (6) check signal lights, (7) brake-system check.",
    handbook:"The seven-step inspection method: vehicle overview; engine compartment; start engine and check the cab; lights; walk-around; signal lights; and the brake-system check.",
    hbref:"§2.1 Vehicle Inspection"
  },
  {
    q:"A Texas Class A CDL is required to drive:",
    options:["Any single vehicle over 26,001 lb","Any combination with a GCWR of 26,001 lb or more where the towed unit(s) exceed 10,000 lb GVWR","Only vehicles carrying 16 or more passengers","Only placarded hazardous-materials vehicles"],
    answer:1,
    explanation:"Class A covers combinations with a gross combination weight rating of 26,001 lb or more where what is being towed is rated over 10,000 lb — i.e., tractor-trailers.",
    handbook:"Class A: any combination of vehicles with a GCWR of 26,001 pounds or more, provided the towed unit(s) have a GVWR of more than 10,000 pounds.",
    hbref:"§1 CDL Classes"
  },
  {
    q:"If you take your CDL skills test in a vehicle WITHOUT air brakes, or fail the air-brakes knowledge test, your license will:",
    options:["Be issued with no limits","Carry an air-brake restriction barring you from driving air-brake-equipped CMVs","Automatically include the air-brake endorsement","Require a new road test in a car"],
    answer:1,
    explanation:"To drive a CMV with air brakes you must pass the air-brakes knowledge test and take your skills test in an air-brake-equipped vehicle; otherwise your CDL carries an air-brake restriction.",
    handbook:"An air-brake restriction is placed on your CDL if you fail the air-brakes knowledge test or take the skills test in a vehicle without air brakes.",
    hbref:"§1 Restrictions"
  },
  {
    q:"By driving a commercial vehicle in Texas you give 'implied consent' to alcohol testing. Refusing a lawful test:",
    options:["Has no consequences","Is itself a disqualifying offense — at least a one-year loss of your CDL","Results only in a small fine","Is allowed once per year"],
    answer:1,
    explanation:"Operating a CMV means you consent to BAC testing. Refusing the test is treated like a major offense and disqualifies you for at least one year on a first offense.",
    handbook:"By driving a CMV you give implied consent to alcohol testing; refusing the test is a disqualifying offense with at least a one-year loss of the CDL.",
    hbref:"§1 Alcohol and Disqualifications"
  },
  {
    q:"A CMV driver found with any detectable alcohol BELOW the .04% limit will be:",
    options:["Given a verbal warning only","Placed out of service for 24 hours","Disqualified for life","Fined and allowed to keep driving"],
    answer:1,
    explanation:"Even under .04%, any detectable alcohol puts the driver out of service for 24 hours. At .04% or more it becomes a disqualifying DUI offense.",
    handbook:"A driver with any detectable amount of alcohol under .04% is placed out of service for 24 hours.",
    hbref:"§1 Alcohol Rules"
  },
  {
    q:"About how long does a typical loaded tractor-trailer need to completely clear a SINGLE railroad track?",
    options:["About 3 seconds","At least 14 seconds (and more than 15 seconds for a double track)","About 1 second","Crossing time does not matter"],
    answer:1,
    explanation:"A typical tractor-trailer needs at least 14 seconds to clear a single track and more than 15 seconds for a double track — so never start across unless you can get all the way over.",
    handbook:"A typical tractor-trailer needs at least 14 seconds to clear a single track and more than 15 seconds to clear a double track.",
    hbref:"§2.14 Railroad Crossings"
  },
  {
    q:"A front-end header board ('headache rack') is provided to:",
    options:["Hold the spare tire","Protect the driver from cargo that shifts forward during a hard stop or crash","Improve fuel economy","Mark an oversize load"],
    answer:1,
    explanation:"Header boards protect you from cargo sliding forward into the cab in a sudden stop. Blocking and bracing are also used to keep cargo from shifting.",
    handbook:"Front-end header boards ('headache racks') protect you from cargo shifting forward; blocking and bracing keep cargo from sliding.",
    hbref:"§3.2 Securing Cargo"
  },
  {
    q:"Which is a tire defect you must catch during an inspection?",
    options:["Tread depth above 4/32 inch on the front tires","Mixing radial and bias-ply tires on the vehicle, or dual tires touching each other","Tire sizes that all match","Tires that are properly inflated"],
    answer:1,
    explanation:"Do not mix radial and bias-ply tires, and dual tires must not be touching. Also confirm tread depth (4/32 front, 2/32 others) and look for cuts, bulges, and low pressure.",
    handbook:"Do not use radial and bias-ply tires together on the same vehicle, and dual tires must not touch each other.",
    hbref:"§2.1 Vehicle Inspection — Tires"
  },
  {
    q:"To keep from rolling back when starting on an upgrade in a tractor-trailer, you should:",
    options:["Rev the engine high and pop the clutch","Partly engage the clutch before releasing the brake, or hold with the parking brake or trailer hand valve","Shift to neutral first","Release the brake quickly and accelerate hard"],
    answer:1,
    explanation:"Roll-back can strike a vehicle behind you. Partly engage the clutch before you release the brake, or use the parking brake (or the trailer hand valve on a combination) and release it as you apply power.",
    handbook:"Partly engage the clutch before you take your right foot off the brake; use the parking brake, or the trailer hand valve, to keep from rolling back on a hill.",
    hbref:"§2.2 Basic Control of Your Vehicle"
  }
);

/* ===== HARD set — General Knowledge ===== */
CAT("general").questions.push(
  {
    q:"At 55 mph a hazard appears. Before your foot even touches the brake, perception (~1.5 s) and reaction (~0.75 s) are over. About how far has the vehicle traveled by then?",
    options:["About 60 feet","About 142 feet","About 200 feet","About 419 feet"],
    answer:2,
    explanation:"Perception distance is about 142 ft and reaction distance about 61 ft — roughly 200 ft before braking even begins. Braking then adds about 216 ft for about 419 ft total.",
    handbook:"At 55 mph perception distance is about 142 feet and reaction distance about 61 feet; only then does braking distance of about 216 feet begin.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"Which situation gives the LONGEST stopping distance, all at the same speed?",
    options:["A fully loaded truck on dry pavement","An empty truck on a wet road","A loaded truck on a damp road","An empty truck on dry pavement"],
    answer:1,
    explanation:"Empty trucks have poor traction (brakes and tires are built for the loaded weight), and a wet road cuts traction further — the worst combination, with wheels prone to lock.",
    handbook:"An empty vehicle has less traction and wet roads can double stopping distance; together they give the poorest braking.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"You are pulling a 70-foot combination at 62 mph in clear weather. The recommended following distance is about:",
    options:["6 seconds","7 seconds","8 seconds","10 seconds"],
    answer:2,
    explanation:"One second per 10 feet of length is 7 seconds for 70 feet; above 40 mph add one second, giving 8 seconds.",
    handbook:"Allow one second for each 10 feet of vehicle length below 40 mph; at higher speeds add one second.",
    hbref:"§2.7 Managing Space"
  },
  {
    q:"In heavy rain at 35 mph the steering suddenly goes light and the truck stops responding to the wheel. Your FIRST action should be to:",
    options:["Brake firmly to slow down","Take your foot off the accelerator and push in the clutch","Steer sharply to find grip","Downshift hard"],
    answer:1,
    explanation:"This is hydroplaning. Release the accelerator and push in the clutch so the wheels slow and regain contact; do not brake hard or steer sharply.",
    handbook:"If your vehicle hydroplanes, release the accelerator and push in the clutch to let the wheels slow down and regain traction.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"Which statement about antilock brakes (ABS) is TRUE?",
    options:["ABS always shortens your stopping distance","ABS lets you keep steering by preventing wheel lockup, but does not necessarily stop you shorter","If the ABS light stays on you have no brakes at all","ABS means you should pump the pedal in a hard stop"],
    answer:1,
    explanation:"ABS keeps the wheels from locking so you can steer while braking hard. It does not necessarily shorten the stop, you still have normal brakes if the lamp is on, and you should hold (not pump) the pedal.",
    handbook:"ABS helps you keep control and steer when you brake hard; it does not necessarily shorten your stopping distance.",
    hbref:"§2.17 Antilock Braking Systems"
  },
  {
    q:"On a long, steep downgrade your speed should be controlled MAINLY by:",
    options:["Steady light pressure on the brakes the whole way down","A low gear and the engine, with occasional firm (snub) braking","The parking brake","Coasting in neutral to save the brakes"],
    answer:1,
    explanation:"Be in a low gear before the grade so the engine holds your speed; use brief firm snub braking only as a supplement. Riding the brakes overheats them and causes fade.",
    handbook:"Once in the proper low gear, the braking effect of the engine is the principal way to control speed; brakes are only a supplement.",
    hbref:"§2.15 Mountain Driving"
  },
  {
    q:"At 1 a.m. the car ahead drifts within its lane, slows for no reason, then speeds up again. The MOST likely hazard is:",
    options:["A lost tourist reading signs","An impaired or drowsy driver","A minor mechanical fault","Someone set on cruise control"],
    answer:1,
    explanation:"Drifting plus erratic speed late at night most strongly suggests an impaired or drowsy driver. Keep well back and do not pass closely.",
    handbook:"Drivers who weave or change speed for no reason, especially late at night, may be drunk or drowsy and are a serious hazard.",
    hbref:"§2.8 Seeing Hazards"
  },
  {
    q:"You are hauling a single 23-foot steel beam. Ignoring the weight rule, the MINIMUM number of tie-downs by the length rule is:",
    options:["Two","Three","Four","One"],
    answer:1,
    explanation:"At least one tie-down per 10 feet of cargo: 23 feet needs three (covering up to 30 feet), and never fewer than two. So three.",
    handbook:"Use at least one tie-down for each 10 feet of cargo, with a minimum of two no matter how short.",
    hbref:"§3.2 Securing Cargo"
  },
  {
    q:"A ramp is posted 35 mph. You are driving a half-full tanker. You should take the ramp at:",
    options:["Exactly 35 mph — the sign is set for trucks","Just under 35 mph","Well below 35 mph because of the high center of gravity and liquid surge","Any speed if the tank has baffles"],
    answer:2,
    explanation:"Posted speeds are for cars in good conditions. A tanker with a high center of gravity and surging liquid can roll over at the posted ramp speed — slow well below it, even with baffles.",
    handbook:"Take curves and ramps well below posted speeds; a high center of gravity and surging liquid make rollover easy.",
    hbref:"§2.6 Controlling Speed"
  },
  {
    q:"At a roadside check a CMV driver registers 0.02% BAC. What happens?",
    options:["Nothing — it is under the 0.04% limit","Placed out of service for 24 hours","Immediate one-year disqualification","Charged with DUI on the spot"],
    answer:1,
    explanation:"Any detectable alcohol under 0.04% means out of service for 24 hours. At 0.04% or more it becomes a DUI / disqualifying offense.",
    handbook:"A driver with any detectable amount of alcohol under 0.04 may be placed out of service for 24 hours.",
    hbref:"§2.21 Alcohol and Other Drugs"
  },
  {
    q:"A trailer tire catches fire from an overheated wheel bearing. Which is correct?",
    options:["Never put water on any vehicle fire","Water may be used to cool a burning tire, but use a B:C extinguisher on electrical or fuel fires","Use only water, never an extinguisher","Use a Class A extinguisher on the fuel tank"],
    answer:1,
    explanation:"Water can cool a burning tire (and works on wood, paper, cloth), but never use water on electrical or gasoline fires — use a B:C extinguisher there.",
    handbook:"Water can be used on burning wood, paper, cloth, or to cool a tire, but not on electrical or burning-liquid fires; use a B:C extinguisher for those.",
    hbref:"§2.20 Fires"
  },
  {
    q:"On a dark road your low beams light about 250 feet ahead. To avoid overdriving your headlights, your speed should be no more than roughly:",
    options:["30 mph","40 mph","55 mph","65 mph"],
    answer:1,
    explanation:"You must be able to stop within the distance you can see. Total stopping distance reaches about 250 feet at roughly 40 mph, so going faster means you cannot stop within your headlight range.",
    handbook:"Do not overdrive your headlights; you must be able to stop within the distance you can see ahead.",
    hbref:"§2.10 Night Driving"
  }
);

CAT("airbrakes").questions.push(
  {
    q:"An air brake setup is actually three braking systems in one. They are the:",
    options:["Service, parking, and emergency brake systems","Front, rear, and trailer systems","Primary, backup, and hydraulic systems","Engine, exhaust, and spring systems"],
    answer:0,
    explanation:"Air brakes combine a service brake system (normal stops), a parking brake system (spring brakes), and an emergency brake system that uses parts of both to stop the vehicle if there is a failure.",
    handbook:"Air brakes are really three different braking systems: service, parking, and emergency.",
    hbref:"§5.1 Air Brake System Parts"
  },
  {
    q:"Federal rules require antilock brakes (ABS) on truck tractors built on or after:",
    options:["March 1, 1997 (and most other air-brake trucks, buses, trailers and dollies on or after March 1, 1998)","January 1, 2000","March 1, 2010","ABS has never been required"],
    answer:0,
    explanation:"Tractors built on/after March 1, 1997, and other air-braked trucks, buses, trailers, and converter dollies built on/after March 1, 1998, must have ABS. A yellow malfunction lamp shows if it is not working.",
    handbook:"ABS is required on tractors manufactured on or after March 1, 1997, and on other air-brake vehicles and trailers manufactured on or after March 1, 1998.",
    hbref:"§5.1 Antilock Braking Systems"
  },
  {
    q:"During an air-brake inspection, a brake drum is considered out of service if it has a crack:",
    options:["Of any hairline length","Longer than one-half the width of the friction area","Only if the drum is rusted","Brake drums never crack"],
    answer:1,
    explanation:"Cracks longer than half the width of the friction surface make the drum unsafe. Also check that linings are not loose, soaked with oil or grease, or dangerously thin.",
    handbook:"Brake drums must not have cracks longer than one-half the width of the friction area; linings must not be loose, oil-soaked, or dangerously thin.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"When using stab braking (on a vehicle without ABS) in an emergency, you reapply the brakes:",
    options:["Immediately, before the wheels start rolling","Only after the wheels begin rolling again — which can take up to 1 second","Exactly 10 seconds after releasing","Never; once released you leave them off"],
    answer:1,
    explanation:"Stab braking means brake fully, release when the wheels lock, and reapply once they roll again. The wheels can take up to a second to start rolling, so wait before reapplying.",
    handbook:"Stab braking: apply the brakes fully; when the wheels lock, release the brakes until the wheels start rolling, then reapply — the wheels may take up to one second to start rolling.",
    hbref:"§5.4 Using Air Brakes"
  }
);

/* ===== HARD set — Air Brakes ===== */
CAT("airbrakes").questions.push(
  {
    q:"Engine off, brakes released, fully charged combination vehicle: the gauge drops 3 psi in 30 seconds. This is:",
    options:["Fine — under the 2 psi limit","Too much — it equals 6 psi per minute, over the 3 psi/min limit for a combination","Fine — combinations may lose up to 4 psi","Impossible to judge without the engine running"],
    answer:1,
    explanation:"3 psi in 30 seconds equals 6 psi per minute — well over the 3 psi/min released-brake limit for combinations (2 psi/min for single vehicles). Fix it before driving.",
    handbook:"With brakes released, air loss should be no more than 2 psi per minute for single vehicles and 3 psi per minute for combinations.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"With air brakes, after perception and reaction you press the pedal. The extra ~32 ft of 'brake lag' at 55 mph comes from:",
    options:["The driver reacting slowly","The roughly half-second for air to travel and apply the brakes after the pedal is pushed","ABS cycling the brakes on and off","The brakes overheating"],
    answer:1,
    explanation:"Air brakes add brake lag — about half a second for the air to move and apply — which is roughly 32 feet at 55 mph, on top of perception, reaction, and braking distance.",
    handbook:"Air brakes have a brake lag of about half a second for the air to work after the brake pedal is pushed, adding about 32 feet at 55 mph.",
    hbref:"§5.4 Using Air Brakes"
  },
  {
    q:"You ignore the low-air warning and keep driving as pressure keeps falling. The spring (emergency) brakes will come on by themselves at about:",
    options:["55 psi","45 psi exactly","20 to 45 psi","0 psi"],
    answer:2,
    explanation:"As air pressure drops into the 20–45 psi range, the spring brakes apply automatically — possibly at an unsafe moment. That is why you stop as soon as the warning comes on.",
    handbook:"Spring brakes come on automatically when air pressure drops into the range of about 20 to 45 psi.",
    hbref:"§5.1 Spring Brakes"
  },
  {
    q:"Your air pressure climbs past 140 psi and the safety valve lets air out at 150 psi. The most likely problem is:",
    options:["Normal — the system is just full","The governor is not cutting the compressor out and needs repair","You are braking too much","The low-air warning is stuck on"],
    answer:1,
    explanation:"The governor should cut the compressor out around 125 psi. If pressure climbs to 150 and the safety valve releases, the governor is faulty — get it fixed.",
    handbook:"The safety valve opens at about 150 psi; if it releases air, something is wrong, such as the governor not cutting out.",
    hbref:"§5.1 Air Compressor Governor"
  },
  {
    q:"While driving, the primary air circuit suddenly fails. What is TRUE of a properly working dual system?",
    options:["You lose all braking at once","The secondary circuit still stops you, with a longer distance, and the low-air warning comes on","The spring brakes lock instantly at any speed","Only the parking brake works"],
    answer:1,
    explanation:"Dual systems keep primary and secondary separate. If one fails the other still brakes the vehicle (with a longer distance), and the low-air warning alerts you.",
    handbook:"A dual air brake system has two separate systems; if one loses pressure, the other can still be used to stop the vehicle.",
    hbref:"§5.2 Dual Air Brake Systems"
  },
  {
    q:"You pull hard on a manual slack adjuster and it moves about 1.5 inches. This means:",
    options:["The brakes are well adjusted","The brakes are out of adjustment (more than about 1 inch of free play) and unsafe","The brake chamber is too large","The ABS needs resetting"],
    answer:1,
    explanation:"If a slack adjuster moves more than about one inch where the pushrod attaches, the brakes are out of adjustment — the most common air-brake defect — and must be fixed.",
    handbook:"If a slack adjuster moves more than about one inch when pulled by hand, the brakes need adjustment.",
    hbref:"§5.3 Inspecting Air Brakes — Slack Adjusters"
  },
  {
    q:"You have just descended a long grade and the brakes are very hot. You need to park briefly on a slight slope. Best practice:",
    options:["Set the parking (spring) brakes firmly","Let the brakes cool and chock the wheels rather than setting the parking brakes","Hold the service brake with the engine running","Spray water on the hot drums"],
    answer:1,
    explanation:"Setting parking brakes on very hot drums can damage them, and if it is wet and freezing they can freeze. Let them cool and chock the wheels.",
    handbook:"If the brakes are very hot, do not use the parking brakes; let them cool and use wheel chocks instead.",
    hbref:"§5.4 Using Air Brakes — Parking"
  },
  {
    q:"In a dual air system at operating rpm, the build-up check expects pressure to rise from 85 to 100 psi within:",
    options:["45 seconds","3 minutes","10 seconds","2 minutes"],
    answer:0,
    explanation:"For a dual air system, pressure should build from 85 to 100 psi within 45 seconds at operating rpm; slower build-up means the system may not keep up with demand.",
    handbook:"In dual air systems, the pressure should build from 85 to 100 psi within 45 seconds at the engine's operating rpm.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"Per the Texas handbook, the low-air pressure warning must come on before tank pressure falls below:",
    options:["45 psi","55 psi","60 psi","80 psi"],
    answer:2,
    explanation:"The low-air warning must activate before pressure drops below 60 psi, giving you time to stop while you still have braking air.",
    handbook:"The low air pressure warning signal must come on before the air pressure in the tanks falls below 60 psi.",
    hbref:"§5.1 Low Air Pressure Warning"
  },
  {
    q:"Halfway down a grade the pedal feels softer and the truck speeds up even though you are braking. This is most likely:",
    options:["An air leak in the service line","Brake fade from overheating — downshift, use engine braking, and a runaway ramp if needed","ABS engaging","Wet brakes from a puddle"],
    answer:1,
    explanation:"A soft pedal and rising speed on a grade point to brake fade from heat. Get into a lower gear, use engine braking, and use an escape ramp if you cannot regain control.",
    handbook:"Brakes can fade or fail from excessive heat caused by using them too much instead of using the engine braking effect.",
    hbref:"§5.4 Using Air Brakes — Downgrades"
  },
  {
    q:"To test the service brakes, you should:",
    options:["Brake hard from highway speed","Roll at about 5 mph, apply the brakes firmly, and check for a prompt, straight stop","Only set and release the parking brake","Pump the pedal ten times quickly"],
    answer:1,
    explanation:"At about 5 mph, press the brake firmly; the vehicle should stop promptly without pulling to one side or feeling spongy.",
    handbook:"Test the service brakes by moving at about 5 mph and pushing the brake pedal firmly, noting any pulling or delay.",
    hbref:"§5.3 Inspecting Air Brakes"
  },
  {
    q:"After startup, your tractor's yellow ABS malfunction lamp stays on. You should:",
    options:["Stop immediately — your brakes are gone","Keep driving (you still have normal brakes), brake carefully, and have the ABS repaired soon","Pump the brakes continuously to compensate","Release the parking brake to reset it"],
    answer:1,
    explanation:"If the ABS lamp stays on you have lost only the anti-lock function; normal service brakes still work. Drive carefully to avoid lockup and get it repaired.",
    handbook:"If the ABS is not working you still have regular brakes; the malfunction lamp tells you ABS is off — have it serviced soon.",
    hbref:"§5.1 Antilock Braking Systems"
  }
);

CAT("combination").questions.push(
  {
    q:"The trailer air supply (red, eight-sided) knob and the tractor protection valve close automatically (the knob pops out) when air pressure drops to about:",
    options:["55 to 60 psi","20 to 45 psi","5 to 10 psi","100 psi"],
    answer:1,
    explanation:"If pressure falls into the 20–45 psi range, the tractor protection valve closes and the red trailer-air-supply knob pops out, applying the trailer emergency brakes and keeping air in the tractor.",
    handbook:"The trailer air supply control and tractor protection valve close automatically (the knob pops out) when the air pressure drops to a range of 20 to 45 psi.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"On the air-line couplers (glad hands), the standard color coding is:",
    options:["Blue = service line, red = emergency line","Red = service line, blue = emergency line","Both lines are green","Color coding does not matter"],
    answer:0,
    explanation:"Blue marks the service (control) line and red marks the emergency (supply) line; the couplers connect at about a 90° angle. Crossing them leaves you with no trailer brakes, so always test before driving.",
    handbook:"Glad hands are usually color-coded — blue for the service line and red for the emergency line — and connect at a 90-degree angle.",
    hbref:"§6.2 / §6.4 Air Lines"
  },
  {
    q:"Which statement about combination-vehicle rollovers is correct?",
    options:["Empty rigs roll over more easily than loaded ones","A fully loaded rig is about 10 times more likely to roll than an empty one, and quick steering can 'crack the whip' and flip a trailer","Trailers cannot roll over","Speed in curves has no effect on rollover"],
    answer:1,
    explanation:"A loaded rig has a higher center of gravity and is roughly 10× more likely to roll than empty. A sudden steering move is amplified at the rear ('crack the whip') and can flip the trailer — so steer gently and slow for curves.",
    handbook:"More than half of truck-driver deaths in crashes are rollovers; a fully loaded rig is about 10 times more likely to roll over than an empty one. A quick steering move can crack the whip and flip a trailer.",
    hbref:"§6.1 Rollover Risks"
  },
  {
    q:"You are driving a low-clearance trailer (lowboy, car carrier, or moving van) and it gets stuck on a railroad crossing. You should:",
    options:["Try to rock the trailer free","Get out and away from the vehicle and call 911 (or the posted emergency number) using the DOT crossing number","Wait inside the cab for help","Disconnect the trailer on the tracks"],
    answer:1,
    explanation:"If a low-slung trailer hangs up on the tracks, leave the vehicle immediately, move away from the tracks toward any oncoming train, and call the emergency number using the DOT crossing ID posted at the crossing.",
    handbook:"Low-clearance trailers can get stuck on raised crossings; if you are stuck, get out and away from the tracks and call 911 with the DOT crossing number.",
    hbref:"§6.1 Railroad Crossings"
  }
);

/* ===== HARD set — Combination Vehicles ===== */
CAT("combination").questions.push(
  {
    q:"While driving, the red trailer-air-supply knob pops out on its own. The most likely reason is:",
    options:["Normal behavior at highway speed","A big air leak or loss dropped pressure into the 20–45 psi range","You accidentally pressed it","The trailer is fully loaded"],
    answer:1,
    explanation:"The knob pops out (and the tractor protection valve closes) when pressure falls to about 20–45 psi, applying the trailer emergency brakes. It signals a serious air loss — stop safely.",
    handbook:"The trailer air supply control pops out when air pressure drops to about 20 to 45 psi, applying the trailer emergency brakes.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"Making a tight right turn with a long trailer, the correct technique is to:",
    options:["Swing wide to the LEFT first, then turn right","Keep the tractor out far enough and turn wide as you COMPLETE the turn, keeping the rear near the curb","Turn the wheel sharply as early as possible","Speed up through the corner"],
    answer:1,
    explanation:"Because the trailer off-tracks (cuts the corner), turn wide as you finish the turn — never swing left first, which invites a driver to pass on your right.",
    handbook:"Turn wide as you complete a turn so the rear wheels clear the curb; do not swing wide to the left before turning right.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"A mechanic accidentally crosses the service and emergency glad-hand connections. The danger is that:",
    options:["The trailer brakes will drag the whole trip","You may have no trailer brakes when you press the pedal","The trailer lights will fail","Nothing — they are interchangeable"],
    answer:1,
    explanation:"Crossed glad hands send air to the wrong line, so you could have no trailer service brakes when you need them. Connect correctly (blue = service, red = emergency) and test before driving.",
    handbook:"If the air lines are crossed, the trailer brakes may not work when needed; connect the service and emergency lines correctly.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"Which is MOST likely to roll over?",
    options:["An empty trailer on a straight, dry highway","A fully loaded trailer taking an off-ramp 5 mph above the posted speed","A bobtail tractor at low speed","A loaded trailer cruising straight on dry pavement"],
    answer:1,
    explanation:"Rollovers come mostly from speed in curves plus a high, loaded center of gravity. A loaded rig over the ramp speed is the classic rollover setup.",
    handbook:"The main causes of rollover are going too fast around turns and a high center of gravity; a loaded rig is far more likely to roll than an empty one.",
    hbref:"§6.1 Rollover Risks"
  },
  {
    q:"After coupling, you see daylight (a gap) between the trailer apron and the fifth wheel. You should:",
    options:["Drive slowly and keep watching it","Not drive — the kingpin may not be locked in the jaws and the trailer could come loose","Add grease to close the gap","Ignore it; a small gap is normal"],
    answer:1,
    explanation:"There must be no space between the upper and lower fifth wheel. A gap means the kingpin may not be locked — do not drive until it is fixed.",
    handbook:"Make sure there is no space between the upper and lower fifth wheel; a gap means the kingpin may not be locked in the jaws.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"The best way to confirm the fifth wheel is truly locked onto the kingpin is to:",
    options:["Check that the trailer lights work","Lock the trailer brakes and gently pull forward in low gear, then get out and inspect the connection","Tap the side of the trailer","Listen for a click while coupling"],
    answer:1,
    explanation:"Do a tug test — with trailer brakes locked, pull gently forward; the trailer should stay attached. Then visually confirm the jaws are closed around the kingpin with no gap.",
    handbook:"Test the coupling by pulling against the locked trailer brakes; the tractor should not separate from the trailer.",
    hbref:"§6.4 Coupling and Uncoupling"
  },
  {
    q:"Compared with a loaded tractor-trailer, a bobtail tractor (no trailer) usually:",
    options:["Stops in a much shorter distance","Can be surprisingly hard to stop, because the drive wheels carry little weight and can lock up","Cannot skid at all","Has the best braking of any configuration"],
    answer:1,
    explanation:"With no load over the drive axle, traction is poor and the wheels can lock and skid, so a bobtail can need a longer stop. Brake early and gently.",
    handbook:"Bobtail tractors can take longer to stop than a loaded tractor-trailer because the drive wheels have poor traction.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"The emergency (supply) line between tractor and trailer does what?",
    options:["Carries only the brake-pedal signal","Charges the trailer air tanks and applies the trailer emergency brakes if its pressure is lost","Powers the trailer marker lights","Nothing while you are driving"],
    answer:1,
    explanation:"The emergency/supply line charges the trailer tanks; losing its pressure (for example a breakaway) makes the trailer emergency brakes apply. The service line carries the brake signal.",
    handbook:"Losing pressure in the emergency (supply) line applies the trailer emergency brakes; the service line carries the signal from the brake pedal.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"Backing a trailer, you want the rear of the trailer to move to your RIGHT. You first turn the steering wheel:",
    options:["To the right","To the left, then follow the trailer by turning back","Straight, then brake","You cannot steer a trailer in reverse"],
    answer:1,
    explanation:"Backing a trailer is opposite a car: to send the trailer right, turn the wheel left at first, then steer back to follow it. Back slowly and use a helper.",
    handbook:"When backing a trailer, turn the steering wheel opposite to the way you want the trailer to go, then follow it.",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  },
  {
    q:"A sliding fifth wheel locked too far FORWARD can:",
    options:["Improve the ride quality","Put too much weight on the steer axle and reduce the cab-to-trailer clearance in turns","Take weight off the steer axle","Have no effect on anything"],
    answer:1,
    explanation:"Where the fifth wheel sits shifts weight between the axles and changes turning clearance. Too far forward overloads the steer axle and brings the trailer closer to the cab in turns.",
    handbook:"The position of the sliding fifth wheel changes how weight is distributed on the axles; it must be locked in a legal position.",
    hbref:"§6.5 Inspecting a Combination Vehicle"
  },
  {
    q:"Using the trailer hand valve (trolley / Johnson bar) to slow down on the road is dangerous because:",
    options:["It brakes only the trailer and can cause a trailer skid","It brakes only the tractor","It releases the parking brakes","It wastes too much fuel"],
    answer:0,
    explanation:"The hand valve applies only the trailer brakes; using it to slow down can make the trailer skid. Use it only to test the trailer brakes — use the foot brake to stop.",
    handbook:"Do not use the trailer hand valve in driving because of the danger of making the trailer skid; use it only to test the trailer brakes.",
    hbref:"§6.2 Combination Vehicle Air Brakes"
  },
  {
    q:"Why is a sudden, hard lane change especially dangerous when the trailer is EMPTY?",
    options:["Empty trailers grip the road better","The light rear is amplified and can whip and flip ('crack the whip')","It saves no time either way","Nothing happens with an empty trailer"],
    answer:1,
    explanation:"A quick steering move is amplified at the rear of the combination; an empty, top-heavy trailer can whip and roll over. Steer smoothly and early.",
    handbook:"Steer gently and smoothly; a sudden steering movement can make the trailer swing and tip over (rearward amplification).",
    hbref:"§6.1 Driving Combination Vehicles Safely"
  }
);

/* =========================================================
   SPECIAL REQUIREMENTS — fully reworked v2 (overrides the
   build-up above). Ordered easy → hard, short balanced
   options (no "longest = correct" tell), varied question types.
   ========================================================= */
CAT("special").questions = [
  {q:"What is the maximum legal width of a commercial vehicle or its load in Texas?",options:["96 inches","102 inches","108 inches","120 inches"],answer:1,explanation:"The maximum width, including the load, is 102 inches (8.5 ft); anything wider needs a permit.",handbook:"The total outside width of a vehicle or its load may not be more than 102 inches.",hbref:"§14 Size and Weight"},
  {q:"What is the maximum height of a vehicle and load on Texas highways?",options:["13 ft","13 ft 6 in","14 ft","15 ft"],answer:2,explanation:"Maximum height is 14 feet; the driver is responsible for clearing all bridges.",handbook:"A vehicle, including its load, may not be more than 14 feet in height.",hbref:"§14 Size and Weight"},
  {q:"The maximum gross weight (vehicle plus load) without a permit is:",options:["72,000 lb","76,000 lb","80,000 lb","90,000 lb"],answer:2,explanation:"The maximum gross weight is 80,000 pounds without an overweight permit.",handbook:"The greatest gross weight allowed is 80,000 pounds.",hbref:"§14 Size and Weight"},
  {q:"The slow-moving vehicle (SMV) emblem is for vehicles designed to go:",options:["15 mph or less","25 mph or less","35 mph or less","45 mph or less"],answer:1,explanation:"The orange triangle warns of vehicles built for 25 mph or less.",handbook:"The slow-moving vehicle emblem is required on vehicles designed to operate at 25 mph or less.",hbref:"§14 Special Equipment"},
  {q:"On an 80-inch-wide truck, the front clearance lamps must be:",options:["Amber","Red","White","Green"],answer:0,explanation:"Front clearance lamps are amber; rear ones are red.",handbook:"Front clearance lamps are amber and rear clearance lamps are red.",hbref:"§14 Lighting"},
  {q:"The rear clearance lamps on a wide truck must be:",options:["Amber","White","Red","Blue"],answer:2,explanation:"Rear clearance lamps and reflectors are red.",handbook:"Rear clearance lamps are red.",hbref:"§14 Lighting"},
  {q:"The two reflectors required on the rear of a CMV must be:",options:["Amber","Red","White","Green"],answer:1,explanation:"Rear reflectors are red.",handbook:"Every commercial vehicle must have two red reflectors on the rear.",hbref:"§14 Lighting"},
  {q:"Tail lamps must show what color to the rear?",options:["White","Amber","Red","Blue"],answer:2,explanation:"Tail lamps show red to the rear.",handbook:"Tail lamps must emit a red light to the rear.",hbref:"§14 Lighting"},
  {q:"Headlamps on a commercial vehicle must show what color?",options:["Amber","White","Yellow","Blue"],answer:1,explanation:"Headlamps must show white light.",handbook:"Headlamps must show a white light.",hbref:"§14 Lighting"},
  {q:"A red flag marking a projecting load must be at least:",options:["6 inches square","9 inches square","12 inches square","18 inches square"],answer:2,explanation:"The red flag must be at least 12 inches square.",handbook:"The load must be marked with a red flag at least 12 inches square.",hbref:"§14 Flags"},
  {q:"A load must be flagged when it extends past the rear by more than:",options:["2 feet","3 feet","4 feet","6 feet"],answer:2,explanation:"A red flag is required when the load extends more than 4 feet past the rear.",handbook:"If the load extends more than four feet beyond the rear it must be marked.",hbref:"§14 Flags"},
  {q:"A load may not extend beyond the front of the vehicle by more than:",options:["3 feet","4 feet","6 feet","10 feet"],answer:0,explanation:"A load may not extend more than 3 feet past the front.",handbook:"A load may not extend more than three feet beyond the front of the vehicle.",hbref:"§14 Load Limits"},
  {q:"When towing with a chain, the connection must display a flag that is:",options:["Red","White","Amber","Orange"],answer:1,explanation:"A towing chain/rope/cable needs a white flag; red is for projecting loads.",handbook:"A white flag at least 12 inches square must be displayed on a towing connection.",hbref:"§14 Towing"},
  {q:"The towing connection between two vehicles may not be longer than:",options:["10 feet","15 feet","20 feet","25 feet"],answer:1,explanation:"The connection may not exceed 15 feet (except a pole/rigid bar).",handbook:"The connection between two towed vehicles may not be more than 15 feet.",hbref:"§14 Towing"},
  {q:"Trailer brakes on the rear axle are required over a gross weight of:",options:["2,500 lb","3,000 lb","4,500 lb","10,000 lb"],answer:2,explanation:"Brakes are required on trailers over 4,500 lb.",handbook:"Trailers in excess of 4,500 pounds must have brakes on the rear-axle wheels.",hbref:"§14 Brakes"},
  {q:"After becoming a Texas resident, out-of-state plates are recognized for:",options:["10 days","20 days","30 days","60 days"],answer:2,explanation:"Out-of-state plates are good for 30 days after residency or employment.",handbook:"Out-of-state plates are recognized for 30 days after establishing residency or employment.",hbref:"§14 Registration"},
  {q:"A buyer's temporary cardboard tag is valid for:",options:["20 days","30 days","45 days","60 days"],answer:0,explanation:"A temporary buyer's tag is valid 20 days.",handbook:"A buyer's temporary tag is valid for 20 days.",hbref:"§14 Registration"},
  {q:"Mud flaps must reach to within what distance of the road?",options:["4 inches","6 inches","8 inches","12 inches"],answer:2,explanation:"Mud flaps must reach within 8 inches of the road.",handbook:"Mud flaps must reach within 8 inches of the road surface.",hbref:"§14 Equipment"},
  {q:"When passing a motorcycle, you must allow at least:",options:["3 feet","6 feet","9 feet","12 feet"],answer:1,explanation:"Allow at least 6 feet and change lanes to pass.",handbook:"Allow at least 6 feet to the left of a motorcycle and do not share the lane.",hbref:"§14 Sharing the Road"},
  {q:"A single vehicle (not a truck-tractor) may not be longer than:",options:["40 feet","45 feet","53 feet","65 feet"],answer:1,explanation:"A single vehicle is limited to 45 feet.",handbook:"A single motor vehicle may not exceed 45 feet in length.",hbref:"§14 Size and Weight"},
  {q:"The maximum number of vehicles allowed in one combination is:",options:["2","3","4","5"],answer:1,explanation:"No more than three vehicles may be combined.",handbook:"No more than three vehicles may be in a combination.",hbref:"§14 Size and Weight"},
  {q:"Tail lamps must be plainly visible from the rear at:",options:["300 ft","500 ft","750 ft","1,000 ft"],answer:3,explanation:"Tail lamps must be visible 1,000 feet to the rear.",handbook:"Tail lamps must emit a red light visible 1,000 feet to the rear.",hbref:"§14 Lighting"},
  {q:"A stop lamp must be visible in daylight from at least:",options:["100 ft","300 ft","500 ft","1,000 ft"],answer:1,explanation:"Stop lamps must be visible 300 feet in normal daylight.",handbook:"A stop lamp must be visible at least 300 feet in normal sunlight.",hbref:"§14 Lighting"},
  {q:"At night, a load projecting more than 4 feet past the rear must show a:",options:["White flag","Red flag","Red light","Amber light"],answer:2,explanation:"At night use a red light (visible 500 ft) instead of the flag.",handbook:"At night the projecting load must be marked with a red light visible 500 feet.",hbref:"§14 Flags"},
  {q:"Rear reflectors must be mounted at a height of:",options:["12–48 inches","24–54 inches","24–60 inches","12–60 inches"],answer:2,explanation:"Rear reflectors mount 24 to 60 inches above the road.",handbook:"Reflectors must be mounted not less than 24 nor more than 60 inches above the road.",hbref:"§14 Lighting"},
  {q:"Headlamps must be mounted at a height of:",options:["12–48 inches","24–54 inches","24–60 inches","20–50 inches"],answer:1,explanation:"Headlamps mount 24 to 54 inches high.",handbook:"Headlamps are mounted not less than 24 nor more than 54 inches high.",hbref:"§14 Lighting"},
  {q:"Outside a city, a truck may not follow another truck closer than:",options:["100 ft","200 ft","300 ft","500 ft"],answer:2,explanation:"Leave at least 300 feet between trucks (passing is still allowed).",handbook:"A truck shall not follow within 300 feet of another truck outside a business or residential district.",hbref:"§14 Following"},
  {q:"You must dim your high beams for an oncoming vehicle within:",options:["200 ft","300 ft","500 ft","1,000 ft"],answer:2,explanation:"Dim high beams within 500 ft of oncoming traffic (300 ft when following).",handbook:"Use low beams within 500 feet of an oncoming vehicle.",hbref:"§14 Lighting"},
  {q:"A combination weighing over 3,000 lb must stop from 20 mph within:",options:["30 ft","40 ft","50 ft","60 ft"],answer:2,explanation:"Over 3,000 lb must stop within 50 ft; 3,000 lb or less within 40 ft.",handbook:"A combination over 3,000 pounds must stop within 50 feet from 20 mph.",hbref:"§14 Brakes"},
  {q:"Which light color may NOT be shown toward the front of a vehicle?",options:["White","Amber","Red","All are allowed"],answer:2,explanation:"Red may not be shown to the front; it is reserved for the rear.",handbook:"A vehicle may not display a red light visible from directly in front.",hbref:"§14 Lighting"},
  {q:"At a railroad crossing, a placarded hazmat truck must:",options:["Stop","Check the way is clear","Cross without shifting gears","All of the above"],answer:3,explanation:"It must stop, make sure the way is clear, and cross without shifting gears.",handbook:"Placarded hazmat vehicles must stop at crossings and proceed only when safe, without shifting gears on the tracks.",hbref:"§14 Railroad Crossings"},
  {q:"Which of these is NOT a Texas limit (without a permit)?",options:["Width 102 in","Height 14 ft","Length 45 ft (single)","Gross 100,000 lb"],answer:3,explanation:"Maximum gross is 80,000 lb, not 100,000; the others are correct limits.",handbook:"The maximum gross weight is 80,000 pounds.",hbref:"§14 Size and Weight"},
  {q:"Tail lamps are visible at ____; stop lamps are visible at ____.",options:["1,000 ft / 300 ft","500 ft / 1,000 ft","300 ft / 1,000 ft","1,000 ft / 500 ft"],answer:0,explanation:"Tail lamps 1,000 ft; stop lamps 300 ft in daylight.",handbook:"Tail lamps must be visible 1,000 feet; stop lamps at least 300 feet.",hbref:"§14 Lighting"},
  {q:"Headlamps mount at ____; rear reflectors mount at ____.",options:["24–54 in / 24–60 in","24–60 in / 24–54 in","both 24–54 in","both 24–60 in"],answer:0,explanation:"Headlamps 24–54 in; reflectors 24–60 in.",handbook:"Headlamps 24 to 54 inches; rear reflectors 24 to 60 inches.",hbref:"§14 Lighting"},
  {q:"When towing a vehicle by chain, which is required?",options:["A white flag on the connection","A connection no longer than 15 feet","Safety chains as a backup","All of the above"],answer:3,explanation:"A white flag, a connection within 15 feet, and safety chains are all required.",handbook:"Towing requires a white flag on the connection, a maximum 15-foot connection, and safety chains.",hbref:"§14 Towing"},
  {q:"Which of the following is LEGAL in Texas?",options:["Coasting downhill in neutral","Showing a red light to the front","Covering a gravel load","A hazmat truck skipping a crossing"],answer:2,explanation:"Covering loose loads is required; the other three are prohibited.",handbook:"Loose materials must be covered; coasting in neutral, red light to the front, and skipping crossings are prohibited.",hbref:"§14 Rules of Operation"}
];

/* =========================================================
   GENERAL KNOWLEDGE — fully reworked v2 (overrides above).
   Easy → hard, short balanced options, varied question types.
   ========================================================= */
CAT("general").questions = [
  {q:"What is the minimum tread depth for front (steer) tires?",options:["2/32 inch","4/32 inch","6/32 inch","8/32 inch"],answer:1,explanation:"Steer tires need at least 4/32 inch; other tires 2/32 inch.",handbook:"Steering axle tires must have at least 4/32 inch tread depth.",hbref:"§2.1 Inspection"},
  {q:"Minimum tread depth for tires other than the front is:",options:["1/32 inch","2/32 inch","4/32 inch","6/32 inch"],answer:1,explanation:"Non-steer tires need at least 2/32 inch.",handbook:"Tires other than the front must have at least 2/32 inch tread depth.",hbref:"§2.1 Inspection"},
  {q:"How much steering-wheel play should make you suspect a problem?",options:["More than 5 degrees","More than 10 degrees","More than 20 degrees","More than 45 degrees"],answer:1,explanation:"More than about 10 degrees (2 in on a 20-in wheel) is too much.",handbook:"More than 10 degrees of steering play may make it hard to steer.",hbref:"§2.1 Inspection"},
  {q:"How many reflective warning triangles must you carry?",options:["One","Two","Three","Six"],answer:2,explanation:"Three reflective triangles (or 6 fusees / 3 liquid flares).",handbook:"Carry three red reflective triangles as warning devices.",hbref:"§2.1 Inspection"},
  {q:"Which fire extinguisher rating works on fuel and electrical fires?",options:["Class A","B:C","Water type","None work"],answer:1,explanation:"A B:C extinguisher works on burning liquids and electrical fires.",handbook:"A B:C fire extinguisher works on electrical fires and burning liquids.",hbref:"§2.20 Fires"},
  {q:"You must carry spare electrical fuses unless the vehicle has:",options:["Circuit breakers","A spare battery","LED lights","Two alternators"],answer:0,explanation:"Spare fuses are required unless the vehicle uses circuit breakers.",handbook:"Carry spare fuses unless the vehicle has circuit breakers.",hbref:"§2.1 Inspection"},
  {q:"The first step of the seven-step inspection is:",options:["Check the lights","Vehicle overview","Start the engine","Check the brakes"],answer:1,explanation:"Step 1 is the vehicle overview.",handbook:"The seven-step method begins with the vehicle overview.",hbref:"§2.1 Inspection"},
  {q:"With the engine off, the inspection includes checking:",options:["Tire pressure only","Oil, coolant and belts","Fifth-wheel grease","The radio"],answer:1,explanation:"Check oil, coolant, power-steering fluid, belts and leaks.",handbook:"Check engine oil, coolant, belts and hoses in the engine compartment.",hbref:"§2.1 Inspection"},
  {q:"Accelerating on a slippery road should be done:",options:["Smoothly and gradually","As fast as possible","With the clutch out","In high gear"],answer:0,explanation:"Speed up smoothly; too much power can spin the drive wheels.",handbook:"Speed up smoothly so the drive wheels do not spin.",hbref:"§2.2 Basic Control"},
  {q:"When backing, you should generally:",options:["Back toward the right","Back toward the driver's side","Back quickly","Use mirrors only"],answer:1,explanation:"Back toward the driver's side, use a helper, and go slowly.",handbook:"Back toward the driver's side so you can see, and use a helper.",hbref:"§2.2 Basic Control"},
  {q:"You should downshift to the right gear:",options:["In the curve","Before a hill or curve","After the curve","Never on grades"],answer:1,explanation:"Select the gear before the hill or curve.",handbook:"Select the gear before starting down a hill or entering a curve.",hbref:"§2.3 Shifting"},
  {q:"Total stopping distance is made up of:",options:["Braking only","Perception + reaction + braking","Reaction + braking","Perception + braking"],answer:1,explanation:"Perception plus reaction plus braking distance.",handbook:"Total stopping distance equals perception plus reaction plus braking.",hbref:"§2.6 Speed"},
  {q:"At 55 mph in good conditions, total stopping distance is about:",options:["140 ft","220 ft","320 ft","420 ft"],answer:3,explanation:"About 419 ft at 55 mph.",handbook:"At 55 mph a vehicle travels about 419 feet to stop.",hbref:"§2.6 Speed"},
  {q:"If you double your speed, braking distance increases about:",options:["2 times","3 times","4 times","10 times"],answer:2,explanation:"Braking distance grows with the square of speed — about 4 times.",handbook:"Doubling speed about quadruples the braking distance.",hbref:"§2.6 Speed"},
  {q:"On a wet road you should reduce speed by about:",options:["One-tenth","One-third","One-half","Three-quarters"],answer:1,explanation:"About one-third on wet roads (half on packed snow).",handbook:"Reduce speed by about one-third on a wet road.",hbref:"§2.6 Speed"},
  {q:"Compared with a loaded truck, an empty truck usually:",options:["Stops sooner","Needs a longer stop","Cannot skid","Has more traction"],answer:1,explanation:"Empty trucks have less traction; wheels can lock and skid.",handbook:"An empty truck may require a greater stopping distance.",hbref:"§2.6 Speed"},
  {q:"If your vehicle starts to hydroplane, you should:",options:["Brake hard","Release the accelerator","Steer sharply","Accelerate"],answer:1,explanation:"Release the accelerator and push in the clutch; don't brake hard.",handbook:"If your vehicle hydroplanes, release the accelerator.",hbref:"§2.6 Speed"},
  {q:"Brake fade is most often caused by:",options:["Cold weather","Overheating from overuse","Low tire pressure","Air in the lines"],answer:1,explanation:"Heat from using the brakes too much instead of engine braking.",handbook:"Brakes can fade from excessive heat caused by overuse.",hbref:"§2.15 Mountain"},
  {q:"Posted curve speed limits are set for:",options:["Loaded trucks","Cars in good conditions","Buses","Empty trucks"],answer:1,explanation:"They are for cars; slow well below them in a truck.",handbook:"Take curves well below the posted speed limit.",hbref:"§2.6 Speed"},
  {q:"The following-distance rule for a heavy vehicle is:",options:["Always a flat 2 seconds","1 second per 10 ft, +1 over 40 mph","About three car lengths","100 ft at any road speed"],answer:1,explanation:"One second per 10 ft of length; add one second over 40 mph.",handbook:"Allow one second per 10 feet of length, plus one over 40 mph.",hbref:"§2.7 Space"},
  {q:"How far ahead should you look while driving?",options:["Just past the hood","4 to 6 seconds","12 to 15 seconds","30 seconds"],answer:2,explanation:"Look 12 to 15 seconds ahead.",handbook:"Look 12 to 15 seconds ahead of your vehicle.",hbref:"§2.4 Seeing"},
  {q:"You should signal a turn:",options:["Only if cars are near","Early and continuously","After you start turning","With your hand only"],answer:1,explanation:"Signal early and keep signaling through the turn.",handbook:"Signal early and continuously until the turn is finished.",hbref:"§2.5 Communicating"},
  {q:"If you are being tailgated, you should:",options:["Speed up","Open up room ahead","Brake-check them","Slow in the left lane"],answer:1,explanation:"Increase space ahead so you can slow gradually; avoid quick moves.",handbook:"If tailgated, increase your following distance and avoid sudden moves.",hbref:"§2.7 Space"},
  {q:"Before turning right, you should NOT:",options:["Turn slowly","Swing wide left first","Keep the rear near the curb","Check your mirrors"],answer:1,explanation:"Swinging left invites a pass on your right; turn wide as you finish.",handbook:"Do not swing wide to the left as you start a right turn.",hbref:"§2.7 Space"},
  {q:"Posted clearance heights at bridges:",options:["Are always exact","Should not be fully trusted","Apply only to cars","Increase when loaded"],answer:1,explanation:"Repaving or snow can reduce clearance; an empty van rides higher.",handbook:"Do not assume posted bridge heights are correct.",hbref:"§2.7 Space"},
  {q:"Convex (curved) mirrors show:",options:["A magnified close-up","A wider area; objects look farther","The same as flat mirrors","Only the cab"],answer:1,explanation:"Wider view, but objects look smaller and farther away.",handbook:"Convex mirrors show a wider area but objects appear farther away.",hbref:"§2.4 Seeing"},
  {q:"A 'hazard' on the road is:",options:["Only a fast-moving speeding car","Any condition or user that could be a danger","Just plain bad weather","Only an actual crash ahead"],answer:1,explanation:"Anything that could become an emergency.",handbook:"A hazard is any road condition or user that is a possible danger.",hbref:"§2.8 Hazards"},
  {q:"The correct response to an aggressive driver is to:",options:["Race them","Stay out of their way","Brake-check them","Block them in"],answer:1,explanation:"Give them room, avoid eye contact, and do not engage.",handbook:"Stay out of an aggressive driver's way and do not challenge them.",hbref:"§2.9 Aggressive"},
  {q:"Texting or holding a phone while driving a CMV is:",options:["Allowed below 30 mph","Prohibited","Fine in light traffic","Banned only for new drivers"],answer:1,explanation:"Banned; it greatly raises crash risk and can disqualify you.",handbook:"CMV drivers must not text or use a hand-held phone while driving.",hbref:"§2.9 Distracted"},
  {q:"Not 'overdriving' your headlights at night means:",options:["Use only low beams","Stop within the lit distance","Follow another vehicle","Use high beams in fog"],answer:1,explanation:"Drive slowly enough to stop within the range you can see.",handbook:"Do not overdrive your headlights; stop within the distance you can see.",hbref:"§2.10 Night"},
  {q:"To avoid glare from oncoming headlights, look:",options:["Straight back at them","To the right edge of your lane","Down at your dashboard","Far down at the road"],answer:1,explanation:"Look toward the right edge/markings until they pass.",handbook:"Do not look at oncoming headlights; look to the right edge of your lane.",hbref:"§2.10 Night"},
  {q:"In dense fog you should use:",options:["Your bright high beams","Low beams and slow down","Only the hazard flashers","No lights at all"],answer:1,explanation:"High beams reflect back; use low beams and slow down.",handbook:"Use low beams in fog and slow down.",hbref:"§2.11 Fog"},
  {q:"In winter, which usually freezes first?",options:["The open road","Bridges and overpasses","Hills","Tunnels"],answer:1,explanation:"Bridges freeze before the road.",handbook:"Bridges freeze before roads in cold weather.",hbref:"§2.12 Winter"},
  {q:"The road looks wet but tires throw no spray in the cold. This is likely:",options:["Drying pavement","Black ice","Fresh asphalt","A dirty windshield"],answer:1,explanation:"Black ice — slow down, no sudden steering or braking.",handbook:"If it is cold and the road looks wet with no spray, suspect black ice.",hbref:"§2.12 Winter"},
  {q:"In very hot weather you should especially check:",options:["Tire pressure","The horn","The radio","Window tint"],answer:0,explanation:"Heat raises tire pressure; check tires and coolant.",handbook:"Heat raises tire pressure; check it in hot weather.",hbref:"§2.13 Hot Weather"},
  {q:"On a long downgrade, speed is controlled mainly by:",options:["Constantly riding the brakes","A low gear and engine braking","Just the parking brake","Coasting in neutral"],answer:1,explanation:"Engine braking in a low gear; brakes only supplement.",handbook:"Use a low gear and engine braking as the main control on a downgrade.",hbref:"§2.15 Mountain"},
  {q:"A runaway-truck escape ramp should be used when:",options:["You want a break","Your brakes fail on a grade","You are slightly speeding","Traffic is heavy"],answer:1,explanation:"Use it if your brakes fail and you cannot stop.",handbook:"Use an escape ramp if your brakes fail on a downgrade.",hbref:"§2.15 Mountain"},
  {q:"If a front tire blows out, your first action is to:",options:["Brake hard right away","Hold the wheel, stay off the brake","Steer sharply aside","Shift into neutral gear"],answer:1,explanation:"Grip the wheel, stay off the brake, let it slow, then ease off the road.",handbook:"On a blowout, hold the wheel firmly and stay off the brake.",hbref:"§2.16 Emergencies"},
  {q:"If your hydraulic brakes fail, first try to:",options:["Pump the brake pedal","Turn off the engine","Pull the trailer knob","Steer into traffic"],answer:0,explanation:"Pump to build pressure, then downshift and use the parking brake.",handbook:"Pumping the brake pedal can sometimes build enough pressure to stop.",hbref:"§2.16 Emergencies"},
  {q:"To recover from a drive-wheel (rear) skid, you should:",options:["Brake even harder","Stop accelerating and steer","Lock up all the brakes","Speed up to pull out"],answer:1,explanation:"Ease off the accelerator and steer where you want to go.",handbook:"To correct a drive-wheel skid, stop accelerating and steer.",hbref:"§2.18 Skids"},
  {q:"A front-wheel skid is usually caused by:",options:["Braking too gently","Driving too fast for conditions","Too much rear weight","Engine braking"],answer:1,explanation:"Going too fast (or worn/under-inflated front tires); slow down.",handbook:"Front-wheel skids are caused mostly by driving too fast for conditions.",hbref:"§2.18 Skids"},
  {q:"The main benefit of ABS in a hard stop is:",options:["A shorter stop every time","Keeping steering control","No need for following space","Automatic steering"],answer:1,explanation:"Prevents lockup so you can steer; not necessarily a shorter stop.",handbook:"ABS helps you keep steering control when braking hard.",hbref:"§2.17 ABS"},
  {q:"First at an accident scene, you should:",options:["Move the injured people","Protect the area with warning devices","Leave to find a phone","Push the wrecks aside fast"],answer:1,explanation:"Prevent another crash first; usually do not move the injured.",handbook:"At a crash, first keep another accident from happening.",hbref:"§2.19 Accidents"},
  {q:"For an engine fire you should:",options:["Open the hood up wide","Keep the hood down if you can","Add more diesel fuel","Drive faster to the shop"],answer:1,explanation:"Opening the hood adds oxygen; shut off the engine.",handbook:"For an engine fire, do not open the hood if you can avoid it.",hbref:"§2.20 Fires"},
  {q:"The blood alcohol limit for driving a CMV is:",options:["0.10%","0.08%","0.04%","0.02%"],answer:2,explanation:"0.04% or more is a violation for CMV drivers.",handbook:"It is illegal to operate a CMV at 0.04% BAC or more.",hbref:"§2.21 Alcohol"},
  {q:"What actually makes a drinker sober?",options:["Coffee","A cold shower","Fresh air","Time"],answer:3,explanation:"Only time removes alcohol from the body.",handbook:"Only time can make a person sober.",hbref:"§2.21 Alcohol"},
  {q:"A driver with detectable alcohol under 0.04% will be:",options:["Warned only","Out of service for 24 hours","Disqualified for life","Fined and released"],answer:1,explanation:"Out of service 24 hours; 0.04% or more is a DUI offense.",handbook:"Any detectable alcohol under 0.04% means 24 hours out of service.",hbref:"§2.21 Alcohol"},
  {q:"You should inspect your cargo within the first:",options:["10 miles","50 miles","100 miles","150 miles"],answer:1,explanation:"Within 50 miles, then every 150 miles or 3 hours.",handbook:"Inspect cargo within the first 50 miles of a trip.",hbref:"§3.1 Cargo"},
  {q:"The minimum tie-down rule for cargo is:",options:["Just one tie-down total","One per 10 ft, at least two","One for every 25 ft","Only loads over 20 ft"],answer:1,explanation:"At least one per 10 ft, minimum two.",handbook:"Use at least one tie-down per 10 feet of cargo, minimum two.",hbref:"§3.2 Cargo"},
  {q:"A high center of gravity makes a vehicle:",options:["More stable","More likely to roll over","Easier to stop","Better in curves"],answer:1,explanation:"More top-heavy; load heavy cargo low.",handbook:"A high center of gravity makes a rollover more likely.",hbref:"§3.1 Cargo"},
  {q:"A Texas Class A CDL is for combinations with a GCWR of:",options:["16,001 lb or more total","26,001 lb+ towing over 10,000 lb","10,000 lb or more total","40,000 lb or more total"],answer:1,explanation:"GCWR 26,001+ where the towed unit is over 10,000 lb.",handbook:"Class A: GCWR 26,001 pounds or more, towed unit over 10,000 pounds.",hbref:"§1 CDL Classes"},
  {q:"You get an air-brake restriction if you:",options:["Pass the air-brake test","Test in a vehicle without air brakes","Drive at night","Have a clean record"],answer:1,explanation:"Failing or skipping the air-brake test (or testing without them) restricts you.",handbook:"An air-brake restriction is added if you do not test on air brakes.",hbref:"§1 Restrictions"},
  {q:"At a railroad crossing, buses with passengers and placarded hazmat must:",options:["Slow only","Always stop","Speed up","Ignore it"],answer:1,explanation:"They must stop, even when no train is visible.",handbook:"Buses with passengers and placarded hazmat must stop at crossings.",hbref:"§2.14 Railroad"},
  {q:"A typical tractor-trailer clears a single track in about:",options:["3 seconds","At least 14 seconds","1 second","Time does not matter"],answer:1,explanation:"At least 14 seconds (over 15 for a double track).",handbook:"A tractor-trailer needs at least 14 seconds to clear a single track.",hbref:"§2.14 Railroad"},
  {q:"In low light or rain, turn on your headlights mainly to:",options:["Save fuel","Be seen by others","Warm the engine","Charge the battery"],answer:1,explanation:"Headlights (not just markers) make you visible.",handbook:"Turn on headlights at dawn, dusk and in rain so others can see you.",hbref:"§2.5 Communicating"},
  {q:"A header board ('headache rack') is there to:",options:["To hold the spare tire in place","Stop cargo from shifting into the cab","To save a little bit of fuel","To mark an extra-wide load"],answer:1,explanation:"It protects you from forward-shifting cargo.",handbook:"Header boards protect the driver from cargo shifting forward.",hbref:"§3.2 Cargo"},
  {q:"Which tire condition is a defect?",options:["Tread over 4/32 in front","Dual tires touching","Matching tire sizes","Proper inflation"],answer:1,explanation:"Dual tires must not touch; do not mix radial and bias-ply.",handbook:"Dual tires must not touch and radial/bias tires must not be mixed.",hbref:"§2.1 Inspection"},
  {q:"Which is a sign you are too tired to drive?",options:["Drifting in your lane","Heavy eyelids","Not recalling the last few miles","All of the above"],answer:3,explanation:"All are danger signs of fatigue — stop and rest.",handbook:"Drifting, heavy eyes, and memory gaps mean you are too tired to drive.",hbref:"§2.22 Fatigue"},
  {q:"Which is NOT required emergency equipment?",options:["Fire extinguisher","Spare fuses (no breakers)","Three triangles","A spare tire"],answer:3,explanation:"A spare tire is not required; the others are.",handbook:"Required: fire extinguisher, spare fuses, and warning devices.",hbref:"§2.1 Inspection"},
  {q:"Which is NOT a correct way to handle a skid?",options:["Stop braking","Steer where you want to go","Keep accelerating","Countersteer as it straightens"],answer:2,explanation:"Do not keep accelerating; ease off and steer.",handbook:"To recover from a drive-wheel skid, stop accelerating and steer.",hbref:"§2.18 Skids"},
  {q:"Why should you inspect the vehicle before a trip?",options:["To find safety defects","Because the law requires it","To prevent breakdowns","All of the above"],answer:3,explanation:"All three — safety, legal duty, and avoiding breakdowns.",handbook:"Inspections find defects, are required by law, and prevent breakdowns.",hbref:"§2.1 Inspection"},
  {q:"Stopping is not always the safest action because:",options:["It just wastes your time","Steering away can be quicker","The brakes will overheat","It is against the law"],answer:1,explanation:"You can often steer to miss a hazard faster than you can stop.",handbook:"Stopping is not always safest; steering to miss may be quicker.",hbref:"§2.16 Emergencies"},
  {q:"Which is the correct order of the stopping-distance parts?",options:["Braking, reaction, perception","Perception, reaction, braking","Reaction, braking, perception","Perception, braking, reaction"],answer:1,explanation:"Perceive, react, then brake.",handbook:"Total stopping distance: perception, then reaction, then braking.",hbref:"§2.6 Speed"},
  {q:"To warn drivers behind that you are slowing a lot, you should:",options:["Just do nothing at all","Tap the brake to flash the lights","Switch on your high beams","Honk the horn repeatedly"],answer:1,explanation:"Tap the brakes to flash early, or use hazards if very slow.",handbook:"Tap the brake pedal to warn drivers behind when slowing down.",hbref:"§2.5 Communicating"}
];

/* =========================================================
   AIR BRAKES — fully reworked v2 (overrides above).
   Easy → hard, short balanced options, varied question types.
   ========================================================= */
CAT("airbrakes").questions = [
  {q:"An air brake system is really how many separate systems?",options:["One","Two","Three","Four"],answer:2,explanation:"Three: service, parking, and emergency.",handbook:"Air brakes are three systems: service, parking and emergency.",hbref:"§5.1 Parts"},
  {q:"The governor stops the compressor (cut-out) at about:",options:["100 psi","110 psi","125 psi","150 psi"],answer:2,explanation:"Cut-out is usually around 125 psi (cut-in around 100 psi).",handbook:"The governor stops the compressor at cut-out, around 125 psi; cut-in is around 100 psi.",hbref:"§5.1 Governor"},
  {q:"The governor lets the compressor start again (cut-in) at about:",options:["60 psi","100 psi","140 psi","150 psi"],answer:1,explanation:"Cut-in is about 100 psi.",handbook:"Cut-in (about 100 psi) is where the compressor resumes pumping.",hbref:"§5.1 Governor"},
  {q:"The safety relief valve usually opens at:",options:["100 psi","125 psi","150 psi","200 psi"],answer:2,explanation:"It opens at about 150 psi to protect the system.",handbook:"The safety valve is usually set to open at 150 psi.",hbref:"§5.1 Reservoirs"},
  {q:"The low-air warning must come on before pressure falls below:",options:["40 psi","55 psi","60 psi","80 psi"],answer:2,explanation:"Before 60 psi (Texas handbook).",handbook:"The low air warning must come on before pressure falls below 60 psi.",hbref:"§5.1 Warning"},
  {q:"Spring (emergency) brakes apply automatically at about:",options:["5–10 psi","20–45 psi","60 psi","100 psi"],answer:1,explanation:"They come on at about 20–45 psi.",handbook:"Spring brakes come on automatically at about 20 to 45 psi.",hbref:"§5.1 Spring Brakes"},
  {q:"The brake pedal in an air system is also called the:",options:["Governor","Foot (treadle) valve","Slack adjuster","Glad hand"],answer:1,explanation:"The foot/treadle valve sends air to the brakes.",handbook:"The brake pedal is also called the foot valve or treadle valve.",hbref:"§5.1 Parts"},
  {q:"Air tanks must be drained to remove:",options:["Air","Water and oil","Brake fluid","Coolant"],answer:1,explanation:"Compressed air collects water and some oil.",handbook:"Air tanks must be drained to remove water and compressor oil.",hbref:"§5.1 Tanks"},
  {q:"What does an air dryer do?",options:["Raises pressure","Removes moisture","Cools the brakes","Warns of low air"],answer:1,explanation:"It removes water and contaminants from the air.",handbook:"The air dryer removes moisture and some oil from the air.",hbref:"§5.1 Parts"},
  {q:"The supply pressure gauge shows:",options:["Tank pressure","Pressure applied to brakes","Engine oil pressure","Tire pressure"],answer:0,explanation:"It shows how much air is in the tanks.",handbook:"The supply pressure gauge shows the pressure in the air tanks.",hbref:"§5.1 Gauges"},
  {q:"The application pressure gauge shows:",options:["The air tank pressure","Pressure applied to the brakes","The engine rpm reading","The tire inflation pressure"],answer:1,explanation:"It shows how much pressure you are applying.",handbook:"The application gauge shows how much pressure you apply to the brakes.",hbref:"§5.1 Gauges"},
  {q:"Pressing the brakes twists the S-cam, which:",options:["Drains the tanks","Spreads the brake shoes","Closes the governor","Raises the trailer"],answer:1,explanation:"The S-cam forces the shoes against the drum.",handbook:"The S-cam twists and forces the brake shoes against the drum.",hbref:"§5.1 Parts"},
  {q:"A manual slack adjuster should move no more than about:",options:["1 inch","3 inches","5 inches","It can move freely"],answer:0,explanation:"More than about an inch means brakes are out of adjustment.",handbook:"A slack adjuster should not move more than about one inch.",hbref:"§5.3 Inspection"},
  {q:"Air brake lag is about:",options:["1/10 second","1/2 second","2 seconds","5 seconds"],answer:1,explanation:"About half a second for air to act after the pedal.",handbook:"Air brakes have about a half-second of brake lag.",hbref:"§5.4 Using"},
  {q:"Air-brake stopping distance adds which extra part?",options:["Perception","Reaction","Brake lag","Nothing extra"],answer:2,explanation:"Perception + reaction + brake lag + braking.",handbook:"With air brakes, add brake lag distance to the stopping distance.",hbref:"§5.4 Using"},
  {q:"Engine off, brakes released, single vehicle: air loss should be under:",options:["2 psi/min","3 psi/min","4 psi/min","6 psi/min"],answer:0,explanation:"Single under 2 psi/min; combination under 3.",handbook:"With brakes released, single vehicles lose under 2 psi/min.",hbref:"§5.3 Inspection"},
  {q:"Engine off, brakes released, combination: air loss should be under:",options:["2 psi/min","3 psi/min","4 psi/min","6 psi/min"],answer:1,explanation:"Combination under 3 psi/min released.",handbook:"With brakes released, combinations lose under 3 psi/min.",hbref:"§5.3 Inspection"},
  {q:"With the brakes applied, a single vehicle should lose under:",options:["2 psi/min","3 psi/min","4 psi/min","6 psi/min"],answer:1,explanation:"Applied: single under 3, combination under 4.",handbook:"With brakes applied, single vehicles lose under 3 psi/min.",hbref:"§5.3 Inspection"},
  {q:"In a dual system, pressure should build 85 to 100 psi within:",options:["10 seconds","45 seconds","3 minutes","5 minutes"],answer:1,explanation:"Within 45 seconds at operating rpm.",handbook:"In dual systems pressure builds 85 to 100 psi within 45 seconds.",hbref:"§5.3 Inspection"},
  {q:"To test the low-air warning, you:",options:["Pump up the pressure","Fan it down until it lights","Drain all the air fast","Turn off the lights"],answer:1,explanation:"Fan the brakes down; the warning must light by 60 psi.",handbook:"Fan off air with the engine off; the warning must light before 60 psi.",hbref:"§5.3 Inspection"},
  {q:"To test the service brakes, you:",options:["Brake hard from highway speed","Roll at 5 mph and brake firmly","Only test the parking brake","Pump ten times"],answer:1,explanation:"At 5 mph, brake firmly; it should stop straight, no pulling.",handbook:"Test service brakes at about 5 mph with a firm brake.",hbref:"§5.3 Inspection"},
  {q:"A brake drum is unsafe if a crack is longer than:",options:["A hairline","Half the friction width","Any length","Drums never crack"],answer:1,explanation:"Cracks over half the friction width are out of service.",handbook:"Drums must not have cracks longer than half the friction width.",hbref:"§5.3 Inspection"},
  {q:"Brake linings are defective if they are:",options:["Thick and dry","Oil-soaked or too thin","Newly replaced","Properly seated"],answer:1,explanation:"Loose, oil-soaked, or dangerously thin linings are bad.",handbook:"Linings must not be loose, oil-soaked, or dangerously thin.",hbref:"§5.3 Inspection"},
  {q:"On a long downgrade, the brakes should be:",options:["The main speed control","A supplement to engine braking","Held down lightly","Pumped constantly"],answer:1,explanation:"Engine braking in a low gear is primary; brakes supplement.",handbook:"On a downgrade, brakes only supplement the engine braking effect.",hbref:"§5.4 Downgrades"},
  {q:"In the snub-braking method, you:",options:["Hold light pressure all the way","Brake firmly, release, and repeat","Pump rapidly","Coast in neutral"],answer:1,explanation:"Brake to about 5 mph below your safe speed, release, repeat.",handbook:"Snub braking: brake firmly to slow, then release, and repeat.",hbref:"§5.4 Downgrades"},
  {q:"Fanning (pumping) the brakes on a long grade:",options:["Saves the brakes","Wastes air and can lose pressure","Builds pressure faster","Cools the engine"],answer:1,explanation:"Air can drop until the brakes fail; use a low gear instead.",handbook:"Fanning uses air faster than the compressor can replace it.",hbref:"§5.4 Using"},
  {q:"You should NOT set the parking brakes when:",options:["Parked overnight","The brakes are very hot","On level ground","After a short trip"],answer:1,explanation:"Hot brakes can be damaged or freeze; chock the wheels.",handbook:"Do not use the parking brakes when the brakes are very hot.",hbref:"§5.4 Parking"},
  {q:"If the low-air warning comes on while driving, you should:",options:["Keep going to the next town","Stop and park as soon as safe","Turn off the warning","Speed up to build air"],answer:1,explanation:"Loss of air can apply the spring brakes suddenly.",handbook:"If the low air warning comes on, stop and park as soon as possible.",hbref:"§5.4 Using"},
  {q:"With ABS, you make an emergency stop by:",options:["Pumping the pedal","Braking hard and holding","Using only the trailer brakes","Releasing at each skid"],answer:1,explanation:"Brake fully and keep steering; ABS prevents lockup.",handbook:"With ABS, brake as hard as you can and keep steering.",hbref:"§5.4 ABS"},
  {q:"Without ABS, the best hard-stop method is:",options:["Locking the wheels","Controlled or stab braking","Pressing to the floor","Pumping the steering"],answer:1,explanation:"Keep the wheels from staying locked so you can steer.",handbook:"Without ABS, use controlled braking or stab braking.",hbref:"§5.4 Using"},
  {q:"In stab braking, you reapply the brakes:",options:["Almost right away","After the wheels roll again","After about 10 seconds","Never reapply them"],answer:1,explanation:"Release when locked; reapply once rolling (up to 1 sec).",handbook:"Stab braking: release when locked, reapply once wheels roll.",hbref:"§5.4 Using"},
  {q:"If your ABS malfunction lamp stays on, you:",options:["Have no brakes","Have normal brakes; fix the ABS","Must stop the engine","Should pump the brakes"],answer:1,explanation:"You lose only the anti-lock function; service it soon.",handbook:"If the ABS lamp stays on you still have normal brakes.",hbref:"§5.1 ABS"},
  {q:"ABS is required on truck tractors built on or after:",options:["1995","1997","1998","2000"],answer:1,explanation:"Tractors 3/1/1997; other vehicles and trailers 3/1/1998.",handbook:"ABS is required on tractors made on or after March 1, 1997.",hbref:"§5.1 ABS"},
  {q:"If one circuit of a dual system fails while driving:",options:["You lose all braking","The other still stops you","The engine stops","Only the lights fail"],answer:1,explanation:"The other circuit still brakes you; the warning comes on.",handbook:"In a dual system, if one circuit fails the other can still stop you.",hbref:"§5.2 Dual"},
  {q:"Why drain the air tanks (or use automatic drains)?",options:["To raise pressure","To remove water that can freeze","To clean the linings","To reset the governor"],answer:1,explanation:"Water can freeze the brakes in cold weather.",handbook:"Drain tanks to remove water that can freeze in cold weather.",hbref:"§5.1 Tanks"},
  {q:"Before driving, let the air system charge to:",options:["A low pressure of about 50 psi","The normal range (about 125 psi)","Exactly 150 psi every time","Almost any pressure level"],answer:1,explanation:"Charge to the normal operating range before moving.",handbook:"Wait for pressure to build to the normal range before driving.",hbref:"§5.3 Inspection"},
  {q:"Why check the air-compressor drive belt (if belt-driven)?",options:["It quietly runs the cab radio","A loose belt may not build enough air","It helps cool the wheel brakes","It charges the trailer battery"],answer:1,explanation:"A slipping belt means the compressor can't keep up.",handbook:"If belt-driven, check the compressor belt's condition and tightness.",hbref:"§5.3 Inspection"},
  {q:"A full pre-trip air-brake check includes which test?",options:["Low-air warning","Build-up time","Leak-down rate","All of the above"],answer:3,explanation:"All of these are part of the air-brake check.",handbook:"Check the low-air warning, build-up time, and leakage rate.",hbref:"§5.3 Inspection"},
  {q:"Which is NOT a way to test air brakes?",options:["Leak-down test","Build-up time","Draining the radiator","Low-air warning"],answer:2,explanation:"The radiator is cooling, not the air-brake system.",handbook:"Air-brake tests include leakage, build-up, and the warning signal.",hbref:"§5.3 Inspection"},
  {q:"Which is NOT true of ABS?",options:["It prevents wheel lockup","It helps you steer","It always shortens the stop","It works in hard stops"],answer:2,explanation:"ABS does not necessarily shorten the stopping distance.",handbook:"ABS does not necessarily shorten stopping distance.",hbref:"§5.1 ABS"}
];

/* =========================================================
   COMBINATION VEHICLES — fully reworked v2 (overrides above).
   Easy → hard, short balanced options, varied question types.
   ========================================================= */
CAT("combination").questions = [
  {q:"As a long vehicle turns, the rear wheels follow:",options:["The same path as the front","A path inside the front wheels","A wider path than the front","No predictable path"],answer:1,explanation:"Off-tracking: the rear wheels cut inside the front path.",handbook:"Rear wheels follow a shorter path than the front (off-tracking).",hbref:"§6.1 Driving"},
  {q:"To keep the trailer off the curb on a right turn, you:",options:["Swing wide left first","Turn wide as you finish the turn","Turn sharply early","Speed through it"],answer:1,explanation:"Keep the rear near the curb; turn wide as you complete the turn.",handbook:"Turn wide as you complete a turn so the rear clears the curb.",hbref:"§6.1 Driving"},
  {q:"How many air lines connect the tractor and trailer?",options:["One","Two","Three","Four"],answer:1,explanation:"Two: the service line and the emergency (supply) line.",handbook:"There are two air lines: service and emergency.",hbref:"§6.2 Air Brakes"},
  {q:"The glad-hand color for the emergency (supply) line is:",options:["Blue","Red","Green","Yellow"],answer:1,explanation:"Red = emergency; blue = service.",handbook:"Glad hands: blue for service, red for emergency.",hbref:"§6.2 Air Brakes"},
  {q:"The red, eight-sided knob in the cab controls the:",options:["Tractor parking brake","Trailer air supply","Trailer service brakes","Headlights"],answer:1,explanation:"It is the trailer air supply / emergency line.",handbook:"The red eight-sided knob is the trailer air supply control.",hbref:"§6.2 Air Brakes"},
  {q:"The tractor protection valve is there to:",options:["Inflate the tractor and trailer tires","Keep air in the tractor if the trailer breaks away","Raise and lower the landing gear","Lock the fifth wheel onto the kingpin"],answer:1,explanation:"It closes to preserve tractor air during a breakaway or leak.",handbook:"The tractor protection valve keeps air in the tractor if the trailer breaks away.",hbref:"§6.2 Air Brakes"},
  {q:"The trailer hand valve should be used:",options:["For parking","Only to test the trailer brakes","Instead of the foot brake","On every downgrade"],answer:1,explanation:"Using it to drive can cause a trailer skid.",handbook:"Use the trailer hand valve only to test the trailer brakes.",hbref:"§6.2 Air Brakes"},
  {q:"After coupling, the locking jaws must close around the kingpin's:",options:["Head (top)","Shank (neck)","Base plate","Release arm"],answer:1,explanation:"Jaws must close around the shank, not the head.",handbook:"The locking jaws must close around the shank of the kingpin.",hbref:"§6.4 Coupling"},
  {q:"How much gap should there be between the fifth-wheel halves?",options:["None","About 1 inch","About 2 inches","A small gap is fine"],answer:0,explanation:"No gap; a gap means the kingpin may not be locked.",handbook:"There must be no space between the upper and lower fifth wheel.",hbref:"§6.4 Coupling"},
  {q:"The tug test checks the coupling by:",options:["Gently tapping on the trailer","Pulling against locked trailer brakes","Checking all the trailer lights","Listening for a faint click"],answer:1,explanation:"Pull gently forward; the trailer should stay attached.",handbook:"Test the coupling by pulling against the locked trailer brakes.",hbref:"§6.4 Coupling"},
  {q:"Before driving, the landing gear should be:",options:["Left partway down","Fully raised, handle secured","Touching the road surface","Removed and stored away"],answer:1,explanation:"Fully up so it does not catch; secure the crank handle.",handbook:"The landing gear must be fully raised with the handle secured.",hbref:"§6.5 Inspection"},
  {q:"To make a trailer go right while backing, first turn the wheel:",options:["Right","Left, then follow it","Straight","You can't steer in reverse"],answer:1,explanation:"Backing a trailer is opposite; turn left first, then follow.",handbook:"Turn the wheel opposite to the way you want the trailer to go.",hbref:"§6.1 Driving"},
  {q:"Glad-hand seals should be:",options:["Removed for a tight fit","In good condition","Coated with oil","Cross-connected"],answer:1,explanation:"Worn seals leak air and reduce trailer braking.",handbook:"Glad-hand seals must be in good condition so they do not leak.",hbref:"§6.4 Coupling"},
  {q:"The two keys to preventing a rollover are low cargo and:",options:["High speed in turns","Slow speed in turns","Hard braking","Quick lane changes"],answer:1,explanation:"Keep cargo low and centered, and go slowly around turns.",handbook:"Prevent rollovers by keeping cargo low and going slowly around turns.",hbref:"§6.1 Rollover"},
  {q:"Compared with an empty one, a fully loaded rig is about:",options:["Half as likely to roll","Just as likely to roll","10 times more likely to roll","Unable to roll"],answer:2,explanation:"A loaded rig has a higher center of gravity.",handbook:"A loaded rig is about 10 times more likely to roll than an empty one.",hbref:"§6.1 Rollover"},
  {q:"A quick, hard steering move can 'crack the whip,' which means:",options:["The tractor cab spins out","The trailer whips and can flip","The service brakes fade out","The diesel engine stalls"],answer:1,explanation:"Rearward amplification; steer gently and smoothly.",handbook:"A sudden steering move can crack the whip and flip the trailer.",hbref:"§6.1 Driving"},
  {q:"If your trailer begins to skid, you should:",options:["Use the hand valve","Release the brakes","Brake harder","Accelerate"],answer:1,explanation:"Release the brakes so the trailer wheels grip again.",handbook:"To stop a trailer skid, release the brakes.",hbref:"§6.1 Skids"},
  {q:"A tractor jackknife starts when the:",options:["Trailer wheels lock","Drive wheels skid","Steer tires wear","Landing gear drops"],answer:1,explanation:"A drive-wheel skid swings the tractor; ease off the brake.",handbook:"When the drive wheels skid, the tractor can jackknife.",hbref:"§6.1 Skids"},
  {q:"A bobtail tractor (no trailer) usually:",options:["Stops much shorter","Takes longer to stop","Cannot skid","Has the best traction"],answer:1,explanation:"Little weight on the drive axle means poor traction.",handbook:"Bobtail tractors can take longer to stop than a loaded rig.",hbref:"§6.1 Driving"},
  {q:"Losing pressure in the emergency line causes:",options:["Nothing at all to happen","The trailer emergency brakes to apply","The trailer to speed right up","The trailer lights to fail"],answer:1,explanation:"A breakaway applies the trailer emergency brakes.",handbook:"Loss of emergency-line pressure applies the trailer emergency brakes.",hbref:"§6.2 Air Brakes"},
  {q:"The service line carries:",options:["The brake-pedal signal","Air to inflate tires","Trailer lighting","Nothing while driving"],answer:0,explanation:"It sends the signal from the brake pedal or hand valve.",handbook:"The service line carries air controlled by the brake pedal.",hbref:"§6.2 Air Brakes"},
  {q:"The red trailer-air knob pops out by itself at about:",options:["55–60 psi","20–45 psi","5–10 psi","100 psi"],answer:1,explanation:"At 20–45 psi the tractor protection valve closes.",handbook:"The trailer air supply pops out at about 20 to 45 psi.",hbref:"§6.2 Air Brakes"},
  {q:"If the glad hands are crossed, you may have:",options:["Brighter lights","No trailer brakes","A smoother ride","Better fuel use"],answer:1,explanation:"Crossed lines send air to the wrong place.",handbook:"Crossed glad hands can leave you with no trailer brakes.",hbref:"§6.4 Coupling"},
  {q:"You position the tractor for coupling by:",options:["Backing in at an angle","Lining up directly in front","Pulling forward over it","Approaching from the side"],answer:1,explanation:"Never back under at an angle; line up squarely.",handbook:"Position the tractor directly in front of the trailer.",hbref:"§6.4 Coupling"},
  {q:"Before backing under, the trailer should be:",options:["Resting on the ground","Low enough to be raised slightly","Higher than the fifth wheel","At any height"],answer:1,explanation:"The tractor should raise it slightly when backing under.",handbook:"The trailer should be raised slightly when the tractor backs under it.",hbref:"§6.4 Coupling"},
  {q:"The fifth-wheel release arm should be:",options:["Pulled fully open","Locked, safety latch closed","Removed completely","Loose and rattling"],answer:1,explanation:"Engaged/locked with the safety latch over it.",handbook:"The release arm must be locked with the safety latch closed.",hbref:"§6.5 Inspection"},
  {q:"A sliding fifth wheel must be:",options:["As far forward as possible","Locked with pins engaged","Left loose","Set only by weight"],answer:1,explanation:"Locked in place; an unlocked slider is dangerous.",handbook:"A sliding fifth wheel must be locked with all pins engaged.",hbref:"§6.5 Inspection"},
  {q:"A sliding fifth wheel set too far forward:",options:["Improves the ride","Overloads the steer axle","Lightens the steer axle","Has no effect"],answer:1,explanation:"It puts too much weight on the steer axle and reduces clearance.",handbook:"Too far forward overloads the steer axle and reduces turning clearance.",hbref:"§6.5 Inspection"},
  {q:"Air and electrical lines should be:",options:["Left dragging for slack","Secured and not dragging","Coiled very tightly","Disconnected for turns"],answer:1,explanation:"Dragging lines can be damaged or torn off.",handbook:"Air and electrical lines must be secured and not dragging.",hbref:"§6.5 Inspection"},
  {q:"Mud flaps (splash guards) must be:",options:["Removed for fuel economy","Present and secured","Dragging on the road","Made of metal"],answer:1,explanation:"They reduce spray onto following vehicles.",handbook:"Splash guards must be present, secured, and not dragging.",hbref:"§6.5 Inspection"},
  {q:"When uncoupling, before pulling out you should:",options:["Raise the landing gear up","Lower the landing gear to support the trailer","Release the trailer parking brakes","Drive forward quickly away"],answer:1,explanation:"Lower the landing gear, disconnect lines, then unlock.",handbook:"Lower the landing gear to support the trailer before uncoupling.",hbref:"§6.4 Coupling"},
  {q:"The trailer's ABS malfunction lamp is usually:",options:["Inside the cab","Yellow, on the left side","On the kingpin","Not present"],answer:1,explanation:"If it stays on, the trailer ABS is not working.",handbook:"Trailers with ABS have a yellow malfunction lamp on the left side.",hbref:"§6.3 ABS"},
  {q:"To avoid a hazard in a combination, it is usually best to:",options:["Brake hard and steer","Steer smoothly, then back","Lock the brakes","Use the hand valve"],answer:1,explanation:"Countersteer smoothly; hard braking can jackknife.",handbook:"Steer to miss a hazard, then steer back, without heavy braking.",hbref:"§6.1 Driving"},
  {q:"A correct coupling check includes:",options:["No gap at the fifth wheel","Jaws around the kingpin","A successful tug test","All of the above"],answer:3,explanation:"All three confirm a safe coupling.",handbook:"Confirm no gap, jaws on the kingpin, and a successful tug test.",hbref:"§6.4 Coupling"},
  {q:"Which is NOT a coupling step?",options:["Line up the tractor","Back under and lock","Drain the air tanks","Connect the air lines"],answer:2,explanation:"Draining the tanks is not part of coupling.",handbook:"Coupling: line up, back under, lock, connect lines, and tug-test.",hbref:"§6.4 Coupling"},
  {q:"Your low trailer is stuck on a railroad crossing. You should:",options:["Try to rock it free","Get out and call the posted emergency number","Unhook the trailer on the tracks","Sit and wait inside the cab"],answer:1,explanation:"Leave the vehicle and call using the DOT crossing number.",handbook:"If stuck on the tracks, get out and away and call with the DOT crossing number.",hbref:"§6.1 Railroad"}
];








