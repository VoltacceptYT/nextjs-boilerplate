(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/items.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "sampleItems": (()=>sampleItems)
});
const sampleItems = [
    {
        name: "Rusty Sword",
        damage: 10,
        description: "An old, worn-out sword with minimal cutting power.",
        rarity: 'common'
    },
    {
        name: "Wooden Shield",
        defense: 5,
        description: "Provides minimal protection against attacks.",
        rarity: 'common'
    },
    {
        name: "Health Potion",
        description: "Restores 50 health points when consumed.",
        rarity: 'common'
    },
    {
        name: "Magic Dagger",
        damage: 15,
        description: "A mystical blade that glows with arcane energy.",
        rarity: 'magic'
    },
    {
        name: "Iron Helmet",
        defense: 8,
        description: "Sturdy headgear forged from quality iron.",
        rarity: 'common'
    },
    {
        name: "Mana Potion",
        description: "Restores 30 mana points for spellcasters.",
        rarity: 'common'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/gameState.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GameStateProvider": (()=>GameStateProvider),
    "useGameState": (()=>useGameState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/items.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const GameStateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function GameStateProvider({ children }) {
    _s();
    const [character, setCharacterState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleItems"]);
    const [health, setHealth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100);
    const [mana, setMana] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [experience, setExperience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const setCharacter = (char)=>{
        setCharacterState(char);
        setHealth(char.baseHealth);
        setMana(char.baseMana);
    };
    const addItem = (item)=>{
        setInventory((prev)=>[
                ...prev,
                item
            ]);
    };
    const removeItem = (index)=>{
        setInventory((prev)=>prev.filter((_, i)=>i !== index));
    };
    const updateHealth = (newHealth)=>{
        setHealth(Math.max(0, Math.min(newHealth, character?.baseHealth || 100)));
    };
    const updateMana = (newMana)=>{
        setMana(Math.max(0, Math.min(newMana, character?.baseMana || 50)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameStateContext.Provider, {
        value: {
            character,
            inventory,
            health,
            mana,
            level,
            experience,
            setCharacter,
            addItem,
            removeItem,
            updateHealth,
            updateMana
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/gameState.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(GameStateProvider, "BjQeQ8ZclpeoUTbcV8ZKYIHwrZY=");
_c = GameStateProvider;
function useGameState() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GameStateContext);
    if (context === undefined) {
        throw new Error("useGameState must be used within a GameStateProvider");
    }
    return context;
}
_s1(useGameState, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "GameStateProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_lib_10e9fb2b._.js.map