
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNProcessTextIntentSpec.h"

@interface ProcessTextIntent : NSObject <NativeProcessTextIntentSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ProcessTextIntent : NSObject <RCTBridgeModule>
#endif

@end
