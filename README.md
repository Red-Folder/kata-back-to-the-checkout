## Back to the Checkout
This is a JavaScript implementation of the kata found here -> http://codekata.com/kata/kata09-back-to-the-checkout/

## Intention
The intention to live stream the kata as I went.

A video of the live stream can be found here -> https://youtu.be/c8jKUXcTDc8.  Its stupidly long (my pathetic excuses below) at a silly 90 minutes.

The code in this repo is as I left it at the end of the live stream.

## Lessons Learnt - the kata
After finishing the live stream, there are three main things I felt I could do better on:

### Unit testing
I took a decision part way through to refactor the code into separate classes (the pricers).  I also took the decision not to add tests specifically for these new classes and to rely on the outside-in testing on the main checkout class.

I decided this as I was very aware that I was running longer on time than I had expected - so saving a bit of time on "relatively" simple classes was a good idea right?

Nope.

Perfect example of when not having the unit test makes the overall processes slower.  You'd see from the video (although I wouldn't recommend sitting through it) I spent a fair amount of time digging through the layers to establish the source of problems.

Having has unit tests on the specialPricer and pricerFactory would have really highlighted the problems a lot quicker (especially the typo in the total function).

### Pricers could be refactored
I mentioned this at the end of the live stream - lot of duplication between the simplePricer and specialPricer.

I chose not to do anything further at the time as I was hitting the 90 minute mark.

### Too much of a jump when adding the simplePricer
There was a considerable change to the code for the simplePricer.  Seemed a little too long to get into place - even though the code changes wasn't massive.

It may have been a more obvious transition if I had implemented unit tests along side.

## Lessons Learnt - the live streaming
Ok, first attempt at live streaming a coding session - as expected a number of take aways.

While the lighting and sound were not great - I think I can live with them for now (as long as I don't mumble).

More practical things;

* Install jest and babel-present-env in advance.  I had wanted to show a setup from scratch - but when it's taking almost 20 minutes to get these ready, next time I'll just pre-bake.
* OBS (Open Broadcasting System) really hammers my laptop.  I think this make the jest install considerably longer than it should have AND made the jest tests annoyingly slow.  I hope this is just a configuration thing - otherwise it makes any live stream work rather tedious
* Cmder windows could do with being a bigger font - just to improve readability

## Unexpected benefits
On the plus side, it did give me an opportunity go through how I debug a problem - at least I'm calling it a good thing.


