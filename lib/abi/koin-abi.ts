export const koin_abi = {
  "methods": {
    "name": {
      "argument": "koinos.contracts.token.name_arguments",
      "return": "koinos.contracts.token.name_result",
      "entry_point": 0x82a3537f,
      "description": "Returns the token name",
      "read_only": true
    },
    "symbol": {
      "argument": "koinos.contracts.token.symbol_arguments",
      "return": "koinos.contracts.token.symbol_result",
      "entry_point": 0xb76a7ca1,
      "description": "Returns the token symbol",
      "read_only": true
    },
    "decimals": {
      "argument": "koinos.contracts.token.decimals_arguments",
      "return": "koinos.contracts.token.decimals_result",
      "entry_point": 0xee80fd2f,
      "description": "Returns the token decimal precision",
      "read_only": true
    },
    "total_supply": {
      "argument": "koinos.contracts.token.total_supply_arguments",
      "return": "koinos.contracts.token.total_supply_result",
      "entry_point": 0xb0da3934,
      "description": "Returns the token total supply",
      "read_only": true
    },
    "balance_of": {
      "argument": "koinos.contracts.token.balance_of_arguments",
      "return": "koinos.contracts.token.balance_of_result",
      "entry_point": 0x5c721497,
      "description": "Checks the balance at an address",
      "read_only": true
    },
    "transfer": {
      "argument": "koinos.contracts.token.transfer_arguments",
      "return": "koinos.contracts.token.transfer_result",
      "entry_point": 0x27f576ca,
      "description": "Transfers the token",
      "read_only": false
    },
    "mint": {
      "argument": "koinos.contracts.token.mint_arguments",
      "return": "koinos.contracts.token.mint_result",
      "entry_point": 0xdc6f17bb,
      "description": "Mints the token",
      "read_only": false
    },
    "burn": {
      "argument": "koinos.contracts.token.burn_arguments",
      "return": "koinos.contracts.token.burn_result",
      "entry_point": 0x859facc5,
      "description": "Burns the token",
      "read_only": false
    }
  },
  "types": "CpUJCiJrb2lub3MvY29udHJhY3RzL3Rva2VuL3Rva2VuLnByb3RvEhZrb2lub3MuY29udHJhY3RzLnRva2VuGhRrb2lub3Mvb3B0aW9ucy5wcm90byIQCg5uYW1lX2FyZ3VtZW50cyIjCgtuYW1lX3Jlc3VsdBIUCgV2YWx1ZRgBIAEoCVIFdmFsdWUiEgoQc3ltYm9sX2FyZ3VtZW50cyIlCg1zeW1ib2xfcmVzdWx0EhQKBXZhbHVlGAEgASgJUgV2YWx1ZSIUChJkZWNpbWFsc19hcmd1bWVudHMiJwoPZGVjaW1hbHNfcmVzdWx0EhQKBXZhbHVlGAEgASgNUgV2YWx1ZSIYChZ0b3RhbF9zdXBwbHlfYXJndW1lbnRzIi8KE3RvdGFsX3N1cHBseV9yZXN1bHQSGAoFdmFsdWUYASABKARCAjABUgV2YWx1ZSIyChRiYWxhbmNlX29mX2FyZ3VtZW50cxIaCgVvd25lchgBIAEoDEIEgLUYBlIFb3duZXIiLQoRYmFsYW5jZV9vZl9yZXN1bHQSGAoFdmFsdWUYASABKARCAjABUgV2YWx1ZSJeChJ0cmFuc2Zlcl9hcmd1bWVudHMSGAoEZnJvbRgBIAEoDEIEgLUYBlIEZnJvbRIUCgJ0bxgCIAEoDEIEgLUYBlICdG8SGAoFdmFsdWUYAyABKARCAjABUgV2YWx1ZSIRCg90cmFuc2Zlcl9yZXN1bHQiQAoObWludF9hcmd1bWVudHMSFAoCdG8YASABKAxCBIC1GAZSAnRvEhgKBXZhbHVlGAIgASgEQgIwAVIFdmFsdWUiDQoLbWludF9yZXN1bHQiRAoOYnVybl9hcmd1bWVudHMSGAoEZnJvbRgBIAEoDEIEgLUYBlIEZnJvbRIYCgV2YWx1ZRgCIAEoBEICMAFSBXZhbHVlIg0KC2J1cm5fcmVzdWx0IioKDmJhbGFuY2Vfb2JqZWN0EhgKBXZhbHVlGAEgASgEQgIwAVIFdmFsdWUieQoTbWFuYV9iYWxhbmNlX29iamVjdBIcCgdiYWxhbmNlGAEgASgEQgIwAVIHYmFsYW5jZRIWCgRtYW5hGAIgASgEQgIwAVIEbWFuYRIsChBsYXN0X21hbmFfdXBkYXRlGAMgASgEQgIwAVIObGFzdE1hbmFVcGRhdGUiQAoKYnVybl9ldmVudBIYCgRmcm9tGAEgASgMQgSAtRgGUgRmcm9tEhgKBXZhbHVlGAIgASgEQgIwAVIFdmFsdWUiPAoKbWludF9ldmVudBIUCgJ0bxgBIAEoDEIEgLUYBlICdG8SGAoFdmFsdWUYAiABKARCAjABUgV2YWx1ZSJaCg50cmFuc2Zlcl9ldmVudBIYCgRmcm9tGAEgASgMQgSAtRgGUgRmcm9tEhQKAnRvGAIgASgMQgSAtRgGUgJ0bxIYCgV2YWx1ZRgDIAEoBEICMAFSBXZhbHVlQj5aPGdpdGh1Yi5jb20va29pbm9zL2tvaW5vcy1wcm90by1nb2xhbmcva29pbm9zL2NvbnRyYWN0cy90b2tlbmIGcHJvdG8z"
}